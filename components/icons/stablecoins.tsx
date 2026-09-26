import { cn } from "@/lib/utils";

export function UsdcIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-5 shrink-0 text-[#2775CA]", className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2" />
      <path
        d="M12 4a8 8 0 100 16 8 8 0 000-16zm.5 12.5h-1v1h-1v-1a2.5 2.5 0 01-1.5-.5l.6-1.1c.4.3.8.5 1.4.5.6 0 1-.3 1-.7 0-.5-.4-.7-1.2-1-1.1-.4-1.8-.9-1.8-1.9 0-.8.6-1.5 1.5-1.7V8h1v1.1c.4.1.8.2 1.2.4l-.5 1.1c-.3-.2-.7-.3-1.1-.3-.6 0-.9.3-.9.6 0 .4.4.6 1.1.9 1.2.4 1.9 1 1.9 2 0 .9-.6 1.6-1.6 1.8v1.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function UsdtIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-5 shrink-0 text-[#26A17B]", className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2" />
      <path
        d="M13.2 11.5v-1.2h3.3V8h-9v2.3h3.3v1.2c-2.8.1-4.9.7-4.9 1.4 0 .7 2.1 1.3 4.9 1.4v4.5h2.4v-4.5c2.8-.1 4.9-.7 4.9-1.4 0-.7-2.1-1.3-4.9-1.4zm0 2.2c-1.8 0-3.3-.3-3.6-.7.3-.4 1.8-.7 3.6-.7s3.3.3 3.6.7c-.3.4-1.8.7-3.6.7z"
        fill="currentColor"
      />
    </svg>
  );
}
