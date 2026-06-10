export default function TrackRowSkeleton({ index }: { index: number }) {
  return (
    <div className="w-full grid grid-cols-[16px_1fr_1fr_80px] gap-4 px-4 py-2 rounded-md">
      <span className="text-sm text-muted-foreground/30 self-center">{index + 1}</span>
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded flex-shrink-0 bg-white/10 animate-pulse" />
        <div className="min-w-0 space-y-1.5">
          <div className="h-3 w-32 bg-white/10 rounded animate-pulse" />
          <div className="h-2.5 w-20 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
      <div className="self-center">
        <div className="h-2.5 w-24 bg-white/10 rounded animate-pulse" />
      </div>
      <div className="flex items-center justify-end">
        <div className="h-2.5 w-8 bg-white/10 rounded animate-pulse" />
      </div>
    </div>
  );
}