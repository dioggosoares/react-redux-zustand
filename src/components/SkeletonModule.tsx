export function SkeletonModule() {
  return (
    <div className="flex w-full items-center gap-3 bg-zinc-800 p-4">
      <div className="flex max-w-[60px] h-10 w-10 rounded-full bg-zinc-950 animate-pulse" />

      <div className="flex w-full max-w-[200px] flex-col gap-1">
        <div className="flex max-w-[100px] h-4 rounded bg-zinc-300/30 animate-pulse" />
        <div className="flex max-w-[80px] h-2 rounded-sm bg-zinc-300/30 animate-pulse" />
      </div>

      <div className="h-3 w-3 max-w-[0.75rem] rounded-sm bg-zinc-300/30 animate-pulse" />
    </div>
  )
}