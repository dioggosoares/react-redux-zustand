import { useEffect } from "react";

import { useCurrentLesson, useStore } from "../zustand-store";

import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { SkeletonModule } from "../components/SkeletonModule";

export function Player() {
  const { course, isLoading, load } = useStore(store => {
    return {
      course: store.course,
      load: store.load,
      isLoading: store.isLoading
    }
  })
  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if (currentLesson) {
      document.title = `Assistindo: ${currentLesson.title}`
    }
  }, [currentLesson])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center">
      <div className="flex w-full max-w-[1100px] flex-col gap-6">
        <Header />

        <main
          className="relative flex overflow-hidden rounded-lg border border-zinc-800
          bg-zinc-900 shadow pr-80"
        >
          <div className="flex-1">
            <Video />
          </div>
          <aside
            className="absolute top-0 bottom-0 right-0 w-80 border-l border-zinc-800
            bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950
            scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900"
          >
            {!course?.modules && isLoading ? (
              <SkeletonModule />
            ) : (
              course?.modules.map((module, index) => {
                return (
                  <Module
                    key={module.id}
                    moduleIndex={index}
                    title={module.title}
                    amountOfLessons={module.lessons.length}
                  />
                )
              })
            )}
          </aside>
        </main>
      </div>
    </div>
  )
}