"use client";

interface AdSlotProps {
  slotId?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

export default function AdSlot({ slotId = "default-slot", format = "rectangle", className = "" }: AdSlotProps) {
  // Min height prevents Cumulative Layout Shift (CLS) on AdSense placement
  const minHeightClass =
    format === "horizontal" ? "min-h-[90px]" : format === "vertical" ? "min-h-[600px]" : "min-h-[250px]";

  return (
    <div
      className={`my-6 w-full flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-4 transition-colors ${minHeightClass} ${className}`}
      aria-label="Advertisement Space"
    >
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
        <span>Advertisement Space</span>
      </div>
      <p className="text-xs text-slate-400/80 dark:text-slate-600 text-center max-w-sm">
        Google AdSense Slot (ca-pub-1334689534917556). Fixed container height eliminates CLS layout shifts.
      </p>

      {/* Live Google AdSense Placement Code */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1334689534917556"
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
