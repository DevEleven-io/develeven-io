"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { PricingPlan } from "@/lib/constants/pricing-plans";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

interface SubscriptionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PricingPlan | null;
  billingInterval: "monthly" | "annual";
  isAdvancePayment?: boolean;
  currentPeriodEndsAt?: number;
}

export function SubscriptionDialog({
  isOpen,
  onClose,
  selectedPlan,
  billingInterval,
}: SubscriptionDialogProps) {
  if (!selectedPlan) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md bg-zinc-900 border-zinc-800 text-white rounded-3xl p-6 sm:p-8">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-zinc-950">
              <Sparkles className="size-4" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
              {selectedPlan.badge}
            </span>
          </div>
          <DialogTitle className="text-2xl font-bold font-brand text-white">
            {selectedPlan.name} Plan
          </DialogTitle>
          <DialogDescription className="text-zinc-400 text-sm">
            {selectedPlan.tagline}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/10 flex items-baseline justify-between">
            <div>
              <span className="text-2xl font-bold font-brand text-white">
                {billingInterval === "annual"
                  ? `$${selectedPlan.yearlyPrice}/yr`
                  : `$${selectedPlan.monthlyPrice}/mo`}
              </span>
              <p className="text-xs text-zinc-400">
                Billed {billingInterval}
              </p>
            </div>
            <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-sky-400/10 text-sky-400 border border-sky-400/20">
              DevEleven Tier
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              What&apos;s Included
            </p>
            <ul className="space-y-2 text-sm text-zinc-300">
              {selectedPlan.features.slice(0, 4).map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-sky-400 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <Button
            asChild
            className="h-12 rounded-full font-semibold bg-primary text-primary-foreground hover:bg-sky-300 border-0 cursor-pointer"
          >
            <Link href="/support" onClick={onClose} className="flex items-center justify-center gap-2">
              <span>Get Started with {selectedPlan.name}</span>
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            className="h-10 rounded-full text-zinc-400 hover:text-white"
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export const SolanaPayDialog = SubscriptionDialog;
