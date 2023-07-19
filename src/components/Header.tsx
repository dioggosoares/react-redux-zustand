import { MessageCircle } from "lucide-react"
import { useCurrentLesson, useStore } from "../zustand-store"

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()
  const isLoading = useStore(store => store.isLoading)
  
  return (
    <>
      {isLoading ? (
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full flex-col gap-1">
            <div className="flex max-w-[200px] h-6 rounded bg-zinc-300/30 animate-pulse" />
            <div className="flex max-w-[250px] h-6 rounded bg-zinc-300/30 animate-pulse" />
          </div>

          <div className="flex w-[154px] h-9 rounded bg-zinc-300/30 animate-pulse" />
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex flex-1 flex-col gap-1">
            <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
            <span className="text-sm text-zinc-400">Módulo "{currentModule?.title}"</span>
          </div>

          <button
            className="flex items-center gap-2 rounded bg-cyan-500 px-3 py-2
            text-sm font-medium text-white hover:bg-cyan-600 transition-colors
            duration-300 ease-linear delay-75"
          >
            <MessageCircle className="h-4 w-4 font-bold" />
            Deixar feedback
          </button>
        </div>
      )}
    </>
  )
}