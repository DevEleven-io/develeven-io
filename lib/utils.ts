import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Strips internal Convex diagnostic wrappers, request IDs, and stack traces
 * from thrown server errors to produce a clean, user-friendly message.
 *
 * Example input:
 * "[CONVEX A(orders_node:createOrder)] [Request ID: ...] Server Error Uncaught Error: Rate limit reached. at handler (...)"
 * Example output:
 * "Rate limit reached."
 */
export function cleanConvexError(err: unknown): string {
  if (!err) return "An unexpected error occurred. Please try again.";

  let raw = "";
  if (err instanceof Error) {
    raw = err.message;
  } else if (typeof err === "object" && err !== null && "message" in err) {
    raw = String((err as any).message);
  } else {
    raw = String(err);
  }

  let cleaned = raw;

  // Extract the inner message between "Uncaught Error:" and "at handler" / end
  const match =
    cleaned.match(
      /Uncaught Error:\s*([^]+?)(?:\s+at\s+handler|\s+at\s+\S+|\s+Called by client|$)/i,
    ) ||
    cleaned.match(
      /Server Error\s+([^]+?)(?:\s+at\s+handler|\s+at\s+\S+|\s+Called by client|$)/i,
    );

  if (match && match[1]) {
    cleaned = match[1].trim();
  } else {
    cleaned = cleaned
      .replace(/^\[CONVEX\s+[^\]]+\]\s*/gi, "")
      .replace(/\[Request ID:\s*[^\]]+\]\s*/gi, "")
      .replace(/^Server Error\s*/gi, "")
      .replace(/^Uncaught Error:\s*/gi, "")
      .replace(/^Error:\s*/gi, "")
      .replace(/\s*at\s+handler[\s\S]*$/gi, "")
      .replace(/\s*Called by client[\s\S]*$/gi, "")
      .trim();
  }

  return cleaned || "An unexpected error occurred. Please try again.";
}

/**
 * Sanitizes a URL by ensuring it doesn't use unsafe protocols like javascript:
 */
export function sanitizeUrl(url?: string): string {
  if (!url) return "#";
  try {
    const parsed = new URL(url, "https://github.com");
    if (["javascript:", "data:", "vbscript:"].includes(parsed.protocol.toLowerCase())) {
      return "#";
    }
    return url;
  } catch (e) {
    return "#";
  }
}
