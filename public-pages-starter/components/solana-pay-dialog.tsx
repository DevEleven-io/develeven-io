"use client";

import { UsdcIcon, UsdtIcon } from "@/components/icons/stablecoins";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import type { PackageConfig } from "@/lib/constants/packages";
import {
  calculatePlanPrice,
  type PricingPlan,
} from "@/lib/constants/pricing-plans";
import { getSolanaTokenMint } from "@/lib/constants/tokens";
import { buildSolanaPayUrl } from "@/lib/utils/solana-pay";
import { cleanConvexError, cn } from "@/lib/utils";
import { NetworkSolana } from "@token-icons/react";
import { useAction, useMutation, useQuery } from "convex/react";
import { Tooltip } from "@/components/ui/tooltip";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Gem,
  HelpCircle,
  Loader2,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import Link from "next/link";
import { useRef, useState } from "react";


export type SolanaPayDialogProps =
  | {
      type: "points";
      isOpen: boolean;
      onClose: () => void;
      selectedPackage: PackageConfig | null;
    }
  | {
      type: "subscription";
      isOpen: boolean;
      onClose: () => void;
      selectedPlan: PricingPlan | null;
      billingInterval: "monthly" | "annual";
      isAdvancePayment?: boolean;
      currentPeriodEndsAt?: number;
    };

export function SolanaPayDialog(props: SolanaPayDialogProps) {
  const isSubscription = props.type === "subscription";
  const isOpen = props.isOpen;
  const onClose = props.onClose;

  const [selectedToken, setSelectedToken] = useState<"USDC" | "USDT">("USDC");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  // Common order state
  const [orderId, setOrderId] = useState<string | null>(null);
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);
  const tokenUpdateDebounceRef = useRef<NodeJS.Timeout | null>(null);

  // Convex mutations and actions
  const createOrderAction = useAction(api.orders_node.createOrder);
  const cancelOrderMutation = useMutation(api.orders.cancelOrder);
  const updateOrderTokenMutation = useMutation(api.orders.updateOrderToken);

  const createSubAction = useAction(
    api.subscriptions_node.createSubscriptionOrder,
  );
  const cancelSubMutation = useMutation(
    api.subscriptions.cancelSubscriptionOrder,
  );
  const updateSubTokenMutation = useMutation(
    api.subscriptions.updateSubscriptionToken,
  );

  const paymentConfig = useQuery(api.paymentConfig.getPaymentConfig);
  const solanaNetwork = paymentConfig?.solanaNetwork ?? "mainnet";
  const isDevnet = solanaNetwork === "devnet";

  // Reactive order queries
  const myPendingPointsOrder = useQuery(
    api.orders.getMyPendingOrder,
    !isSubscription && isOpen ? undefined : "skip",
  );
  const myPendingSubOrder = useQuery(
    api.subscriptions.getMyPendingSubscription,
    isSubscription && isOpen ? undefined : "skip",
  );

  const activePointsOrderId =
    (!isSubscription && (orderId as Id<"orders">)) ||
    (myPendingPointsOrder?.status === "pending"
      ? myPendingPointsOrder._id
      : null);

  const activeSubOrderId =
    (isSubscription && (orderId as Id<"subscriptions">)) ||
    (myPendingSubOrder?.status === "pending" ? myPendingSubOrder._id : null);

  const queriedPointsOrder = useQuery(
    api.orders.getOrder,
    activePointsOrderId ? { orderId: activePointsOrderId } : "skip",
  );

  const queriedSubOrder = useQuery(
    api.subscriptions.getSubscriptionOrder,
    activeSubOrderId ? { subscriptionId: activeSubOrderId } : "skip",
  );

  // Data normalization
  const selectedPackage = !isSubscription ? props.selectedPackage : null;
  const selectedPlan = isSubscription ? props.selectedPlan : null;
  const billingInterval = isSubscription ? props.billingInterval : "monthly";
  const isAdvancePayment = isSubscription
    ? Boolean(props.isAdvancePayment)
    : false;

  const itemPrice = isSubscription
    ? selectedPlan
      ? calculatePlanPrice(selectedPlan.id, billingInterval)
      : null
    : selectedPackage?.price ?? null;

  const itemName = isSubscription
    ? selectedPlan?.name ?? ""
    : selectedPackage?.name ?? "";

  const activeOrderObj = isSubscription
    ? queriedSubOrder ||
      (myPendingSubOrder?.status === "pending" ? myPendingSubOrder : null)
    : queriedPointsOrder ||
      (myPendingPointsOrder?.status === "pending"
        ? myPendingPointsOrder
        : null);

  const isMatchingOrder = Boolean(
    activeOrderObj &&
      ((!isSubscription &&
        selectedPackage &&
        "packageId" in activeOrderObj &&
        (activeOrderObj.packageId === selectedPackage.id ||
          activeOrderObj.amount === selectedPackage.price)) ||
        (isSubscription &&
          selectedPlan &&
          "planId" in activeOrderObj &&
          activeOrderObj.planId === selectedPlan.id &&
          activeOrderObj.billingInterval === billingInterval &&
          (itemPrice === null || activeOrderObj.amount === itemPrice))),
  );

  const matchingOrderObj = isMatchingOrder ? activeOrderObj : null;

  // Build reactive QR
  let computedQrUrl: string | null = null;
  if (matchingOrderObj && matchingOrderObj.status === "pending") {
    const activeTok = (matchingOrderObj.tokenSymbol ?? selectedToken) as
      | "USDC"
      | "USDT";
    const splAddress =
      matchingOrderObj.splToken ??
      getSolanaTokenMint(activeTok, solanaNetwork);

    computedQrUrl = buildSolanaPayUrl({
      recipient: matchingOrderObj.recipient,
      amount: matchingOrderObj.amount,
      splToken: splAddress,
      reference: matchingOrderObj.reference,
      label: isSubscription
        ? isAdvancePayment
          ? "DevEleven Plan Advance Renewal"
          : "DevEleven Plan Upgrade"
        : "DevEleven Points Purchase",
      message: isSubscription
        ? isAdvancePayment
          ? "DevEleven advance subscription payment"
          : "DevEleven plan subscription"
        : "DevEleven points purchase",
    });
  }

  const effectiveQrUrl = qrUrl || computedQrUrl;
  const isPaymentSuccessful =
    paymentSuccess ||
    matchingOrderObj?.status === "paid" ||
    matchingOrderObj?.status === "active";

  // Reset when item changes
  const [prevItemId, setPrevItemId] = useState(
    isSubscription ? selectedPlan?.id : selectedPackage?.id,
  );
  const currentItemId = isSubscription
    ? selectedPlan?.id
    : selectedPackage?.id;
  if (currentItemId !== prevItemId) {
    setPrevItemId(currentItemId);
    setOrderId(null);
    setQrUrl(null);
    setOrderError(null);
    setIsCreatingOrder(false);
  }

  const handleSelectToken = (tok: "USDC" | "USDT") => {
    if (tok === selectedToken) return;
    setSelectedToken(tok);

    if (matchingOrderObj && matchingOrderObj.status === "pending") {
      const tokenContractAddress = getSolanaTokenMint(tok, solanaNetwork);
      if (tokenContractAddress) {
        setQrUrl(
          buildSolanaPayUrl({
            recipient: matchingOrderObj.recipient,
            amount: matchingOrderObj.amount,
            splToken: tokenContractAddress,
            reference: matchingOrderObj.reference,
            label: isSubscription
              ? isAdvancePayment
                ? "DevEleven Plan Advance Renewal"
                : "DevEleven Plan Upgrade"
              : "DevEleven Points Purchase",
            message: isSubscription
              ? isAdvancePayment
                ? "DevEleven advance subscription payment"
                : "DevEleven plan subscription"
              : "DevEleven points purchase",
          }),
        );
      }

      if (tokenUpdateDebounceRef.current) {
        clearTimeout(tokenUpdateDebounceRef.current);
      }

      tokenUpdateDebounceRef.current = setTimeout(async () => {
        try {
          if (isSubscription) {
            const subId = activeSubOrderId;
            if (subId) {
              await updateSubTokenMutation({
                subscriptionId: subId,
                tokenSymbol: tok,
                tokenContract: tokenContractAddress,
              });
            }
          } else {
            const pId = activePointsOrderId;
            if (pId) {
              await updateOrderTokenMutation({
                orderId: pId,
                tokenSymbol: tok,
                tokenContract: tokenContractAddress,
              });
            }
          }
        } catch (err) {
          console.error("Error updating order token in DB:", err);
        }
      }, 400);
    }
  };

  const handleResetOrder = () => {
    setOrderId(null);
    setQrUrl(null);
    setOrderError(null);
    setIsCreatingOrder(false);
  };

  const handleClose = () => {
    setPaymentSuccess(false);
    handleResetOrder();
    onClose();
  };

  const handlePayNow = async () => {
    if (isCreatingOrder) return;
    if (isSubscription && (!selectedPlan || itemPrice === null)) return;
    if (!isSubscription && (!selectedPackage || itemPrice === null)) return;

    setIsCreatingOrder(true);
    setOrderError(null);

    // Cancel existing pending order
    if (isSubscription && activeSubOrderId) {
      try {
        await cancelSubMutation({
          subscriptionId: activeSubOrderId,
        });
      } catch (e) {
        console.error("Error cancelling prior sub order:", e);
      }
    } else if (!isSubscription && activePointsOrderId) {
      try {
        await cancelOrderMutation({
          orderId: activePointsOrderId,
          reason: "Replaced by new points order",
        });
      } catch (e) {
        console.error("Error cancelling prior points order:", e);
      }
    }

    try {
      if (isSubscription && selectedPlan && itemPrice !== null) {
        const result = await createSubAction({
          planId: selectedPlan.id,
          billingInterval,
          network: "solana",
          token: selectedToken,
        });
        setOrderId(result.subscriptionId);
        if (result.qrUrl) setQrUrl(result.qrUrl);
      } else if (!isSubscription && selectedPackage) {
        const packageIdentifier =
          selectedPackage.id || selectedPackage.name.toLowerCase();
        const result = await createOrderAction({
          packageId: packageIdentifier,
          amount: selectedPackage.price,
          network: "solana",
          token: selectedToken,
          packageName: selectedPackage.name,
        });
        setOrderId(result.orderId);
        if (result.qrUrl) setQrUrl(result.qrUrl);
      }
    } catch (err) {
      setOrderError(cleanConvexError(err));
    } finally {
      setIsCreatingOrder(false);
    }
  };

  const handleCopyLink = () => {
    if (!effectiveQrUrl) return;
    navigator.clipboard.writeText(effectiveQrUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const hasItem = isSubscription ? selectedPlan !== null : selectedPackage !== null;
  if (!hasItem) return null;

  return (
    <Dialog
      open={isOpen && hasItem}
      onOpenChange={(open) => {
        if (!open) handleClose();
      }}
    >
      <DialogContent
        className={cn(
          "p-0 w-full overflow-hidden border border-border bg-card rounded-2xl shadow-xl transition-all duration-300",
          isPaymentSuccessful ? "max-w-md" : "sm:max-w-3xl max-w-[95vw]",
        )}
      >
        {isPaymentSuccessful ? (
          /* Success Screen */
          <div className="p-8 flex flex-col items-center text-center animate-fade-in">
            <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center text-success mb-5 animate-fade-up">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <DialogTitle className="text-2xl font-black text-foreground mb-2">
              {isSubscription
                ? isAdvancePayment
                  ? "Advance payment confirmed!"
                  : "Plan upgrade complete!"
                : "Payment confirmed!"}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground max-w-sm leading-relaxed">
              {isSubscription
                ? isAdvancePayment
                  ? `Your payment has been verified. Your ${itemName} subscription has been extended for the next billing cycle.`
                  : `Your payment has been verified. Your account has been upgraded to ${itemName}!`
                : "Your payment has been verified. Your engagement points have been credited to your account."}
            </DialogDescription>
            <div className="mt-6 bg-muted/40 border border-border rounded-xl p-4.5 w-full flex flex-col gap-3 text-sm text-foreground">
              <div className="flex justify-between">
                <span>{isSubscription ? "Plan" : "Package"}</span>
                <span className="font-bold text-foreground">
                  {itemName}
                </span>
              </div>
              {isSubscription ? (
                <div className="flex justify-between">
                  <span>Billing cycle</span>
                  <span className="font-bold text-foreground capitalize">
                    {isAdvancePayment
                      ? `Next ${billingInterval} cycle (advance)`
                      : `${billingInterval} billing`}
                  </span>
                </div>
              ) : selectedPackage ? (
                <div className="flex justify-between">
                  <span>Points to credit</span>
                  <span className="font-bold text-foreground flex items-center gap-1">
                    <Gem className="h-4 w-4 text-primary" />
                    {(
                      selectedPackage.points + selectedPackage.bonusPoints
                    ).toLocaleString()}{" "}
                    pts
                  </span>
                </div>
              ) : null}
              <div className="flex justify-between">
                <span>Amount paid</span>
                <span className="font-bold text-foreground">
                  {itemPrice?.toFixed(2)} {selectedToken}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Network</span>
                <span className="font-bold text-foreground">
                  Solana {isDevnet ? "Devnet (Testnet)" : "Mainnet"}
                </span>
              </div>
            </div>
            <Button
              className="w-full mt-6 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold cursor-pointer transition-colors text-sm h-11"
              onClick={handleClose}
            >
              Done
            </Button>
          </div>
        ) : (
          /* Solana Pay Direct Checkout */
          <div className="p-6 md:p-7 flex flex-col">
            <DialogHeader className="text-left mb-6">
              <DialogTitle className="text-xl font-extrabold tracking-tight text-foreground">
                {isSubscription
                  ? isAdvancePayment
                    ? `Pay in advance — ${itemName}`
                    : `Upgrade to ${itemName}`
                  : `Purchase ${itemName}`}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground leading-relaxed mt-1">
                Select your preferred stablecoin, then scan the QR code with your Solflare wallet.
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Left Column: Details & Controls */}
              <div className="flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-4">
                  {/* Selected Item Overview Banner */}
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/60 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                        <span>
                          {isSubscription
                            ? isAdvancePayment
                              ? "Advance renewal"
                              : "Plan selected"
                            : "Package selected"}
                        </span>
                        {isSubscription && isAdvancePayment && (
                          <Tooltip
                            className="bg-secondary/50 backdrop-blur-xl"
                            side="top"
                            content={
                              <p className="text-xs leading-relaxed text-muted-foreground">
                                Extends your active subscription starting from your current expiration date without losing days.
                              </p>
                            }
                          >
                            <button
                              type="button"
                              aria-label="Advance renewal information"
                              className="cursor-help text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <HelpCircle className="size-3.5" />
                            </button>
                          </Tooltip>
                        )}
                      </div>
                      <div className="text-base font-bold text-foreground flex items-center gap-1.5 mt-0.5">
                        {isSubscription ? (
                          <Sparkles className="h-4 w-4 text-primary" />
                        ) : (
                          <Gem className="h-4 w-4 text-primary" />
                        )}
                        {itemName}
                        <span className="text-xs font-semibold text-muted-foreground">
                          ({isSubscription
                            ? billingInterval
                            : selectedPackage
                              ? `+${(selectedPackage.points + selectedPackage.bonusPoints).toLocaleString()} pts`
                              : ""})
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-extrabold text-foreground tracking-tight">
                        ${itemPrice?.toFixed(2)}
                      </div>
                      <div className="text-xs font-medium text-muted-foreground">
                        USDC / USDT
                      </div>
                    </div>
                  </div>

                  {/* Stablecoin Selector */}
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground block mb-2">
                      Select stablecoin
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(["USDC", "USDT"] as const).map((tok) => {
                        const isSelected = selectedToken === tok;
                        const Icon = tok === "USDC" ? UsdcIcon : UsdtIcon;
                        return (
                          <button
                            key={tok}
                            type="button"
                            onClick={() => handleSelectToken(tok)}
                            className={cn(
                              "flex items-center justify-center gap-2 py-2.5 rounded-xl border font-bold text-sm transition-all cursor-pointer",
                              isSelected
                                ? "bg-muted border-foreground/60 text-foreground shadow-xs ring-1 ring-foreground/20"
                                : "border-border/60 bg-muted/40 hover:bg-muted/70 text-muted-foreground hover:text-foreground",
                            )}
                          >
                            <Icon className="h-4.5 w-4.5" />
                            {tok}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Payment Summary Info Box */}
                  <div className="bg-muted/30 border border-border/50 rounded-xl p-4 flex flex-col gap-2 text-xs">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>Amount to send</span>
                      <span className="text-sm font-black text-foreground">
                        {itemPrice?.toFixed(2)} {selectedToken}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>Network</span>
                      <span className="font-semibold text-foreground flex items-center gap-1">
                        <NetworkSolana variant="branded" className="h-3.5 w-3.5" />
                        Solana {isDevnet ? "Devnet (Testing)" : "Mainnet"}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-center text-muted-foreground pt-1 leading-normal">
                    Non-custodial settlement. By completing checkout, you agree to our{" "}
                    <Link
                      href="/terms"
                      target="_blank"
                      className="underline hover:text-foreground transition-colors"
                    >
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="underline hover:text-foreground transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>

                {/* Left Column Bottom Controls */}
                <div className="pt-2 flex flex-col gap-2">
                  {effectiveQrUrl && !matchingOrderObj?.status && (
                    <div className="flex items-center justify-center gap-2 py-2 px-3 bg-primary/5 border border-primary/20 rounded-xl text-xs text-primary font-semibold">
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      <span>Waiting for payment...</span>
                    </div>
                  )}
                  <Button
                    variant="outline"
                    className="w-full rounded-xl font-bold cursor-pointer text-sm h-10"
                    onClick={handleClose}
                    id="cancel-checkout-payment-btn"
                  >
                    Cancel
                  </Button>
                </div>
              </div>

              {/* Right Column: Solana Pay QR Container */}
              <div className="bg-muted/40 border border-border/60 rounded-xl p-5 flex flex-col items-center justify-center min-h-[330px]">
                {matchingOrderObj?.status === "awaiting_finalization" ? (
                  /* Finalizing state */
                  <div className="flex flex-col items-center gap-3 py-6 text-center">
                    <Loader2 className="h-10 w-10 text-primary animate-spin" />
                    <p className="text-sm font-bold text-foreground">
                      Payment detected!
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Confirming finality on Solana blockchain...
                    </p>
                  </div>
                ) : matchingOrderObj?.status === "expired" ? (
                  /* Expired state */
                  <div className="flex flex-col items-center gap-3 py-4 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <AlertCircle className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      Order expired
                    </p>
                    <p className="text-xs text-muted-foreground">
                      The 15-minute payment window has passed.
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1.5 cursor-pointer mt-1 rounded-xl"
                      onClick={handleResetOrder}
                      id="retry-checkout-order-btn"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      Create new order
                    </Button>
                  </div>
                ) : effectiveQrUrl ? (
                  /* QR Display */
                  <div className="flex flex-col items-center gap-3 w-full">
                    <div className="p-3 bg-white dark:bg-white rounded-xl border border-border/80 shadow-xs">
                      <QRCodeSVG
                        value={effectiveQrUrl}
                        size={175}
                        level="H"
                        marginSize={2}
                        imageSettings={{
                          src: "/solana-logo.svg",
                          x: undefined,
                          y: undefined,
                          height: 34,
                          width: 34,
                          excavate: true,
                        }}
                      />
                    </div>

                    <p className="text-xs text-muted-foreground text-center leading-normal">
                      Scan using <span className="font-bold text-foreground">Solflare</span> QR scanner only
                      <br />
                      <span className="text-amber-500 font-semibold">Other wallets not supported yet</span> • <span className="text-primary font-bold">15 min window</span>
                    </p>

                    <div className="flex gap-2 w-full mt-1">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded-xl text-xs gap-1.5 cursor-pointer"
                        onClick={handleCopyLink}
                      >
                        {copiedUrl ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-500" />
                            Copied link
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            Copy Solana Pay URL
                          </>
                        )}
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-xl text-xs px-3 cursor-pointer"
                      >
                        <a
                          href={effectiveQrUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : orderError ? (
                  /* Error state */
                  <div className="flex flex-col items-center gap-3 py-2 text-center">
                    <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <AlertCircle className="h-5 w-5 text-destructive" />
                    </div>
                    <p className="text-xs text-destructive max-w-50">
                      {orderError}
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1.5 cursor-pointer mt-1 rounded-xl"
                      onClick={handleResetOrder}
                      id="retry-checkout-error-btn"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      Try again
                    </Button>
                  </div>
                ) : (
                  /* Pre-QR Button */
                  <div className="flex flex-col items-center text-center gap-3 w-full py-2">
                    <div className="p-4 bg-card rounded-2xl border border-border/80 flex items-center justify-center">
                      <NetworkSolana
                        variant="branded"
                        className="h-10 w-10"
                      />
                    </div>
                    <div className="flex flex-col gap-1 max-w-[220px]">
                      <span className="text-sm font-bold text-foreground">
                        Solana Pay QR
                      </span>
                      <p className="text-xs text-muted-foreground leading-normal">
                        Click below to generate your secure QR code for instant payment.
                      </p>
                    </div>
                    <Button
                      className="w-full mt-1 rounded-xl bg-foreground hover:bg-foreground/90 text-background font-bold cursor-pointer text-sm h-11 gap-2"
                      onClick={handlePayNow}
                      disabled={isCreatingOrder}
                      id="generate-checkout-qr-btn"
                    >
                      {isCreatingOrder ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Generating QR...
                        </>
                      ) : (
                        <>
                          <NetworkSolana variant="branded" className="h-4 w-4" />
                          {isSubscription && isAdvancePayment
                            ? "Generate QR for advance payment"
                            : "Generate Solana Pay QR"}
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Convenience wrapper for points checkout
export function PaymentDialog(props: {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: PackageConfig | null;
}) {
  return <SolanaPayDialog type="points" {...props} />;
}

// Convenience wrapper for subscription checkout
export function SubscriptionDialog(props: {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PricingPlan | null;
  billingInterval: "monthly" | "annual";
  isAdvancePayment?: boolean;
  currentPeriodEndsAt?: number;
}) {
  return <SolanaPayDialog type="subscription" {...props} />;
}
