import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
  title: string
  duration: string
  isCurrent?: boolean
  onPlay: () => void
}

export function Lesson({ title, duration, onPlay, isCurrent = false }:LessonProps) {
  return (
    <button
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-violet-400
      enabled:hover:text-zinc-100 transition-colors duration-150 ease-linear delay-75"
    >
      {isCurrent ? (
        <PlayCircle className="h-4 w-4 text-violet-400" />
      ) : (
        <Video className="h-4 w-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  )
}