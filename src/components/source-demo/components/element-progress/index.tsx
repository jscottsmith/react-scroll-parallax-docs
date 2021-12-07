import React, { useState } from "react"
import { Parallax } from "react-scroll-parallax"
import { SourceDemo } from "../.."

export const ElementProgress = () => {
  const [progress, setProgress] = useState(0)
  return (
    <SourceDemo
      title="Progress is relative to the view"
      description="All effects are applied based on the original element's progress. Progress begins as the elements top edge enters the bottom of the view. It ends as the bottom of the element leaves the top of the view."
      source={`<Parallax onProgressChange={progress => setProgress(progress)}>`}
    >
      <div className="absolute left-lg ml-md text-sm bg-green-300 p-sm rounded-md">
        <div>Progress</div>
        <div className="font-medium text-xl">{progress.toFixed(2)}</div>
      </div>
      <div className="flex flex-row items-center justify-evenly w-full">
        <Parallax
          onProgressChange={progress => setProgress(progress)}
          className="rounded-lg bg-gray-600 bg-opacity-50"
        >
          <div className="border-2 border-gray-400 border-solid flex items-center justify-center bg-gray-600 h-48 w-48 rounded-lg">
            <p className="text-center font-bold">Element</p>
          </div>
        </Parallax>
      </div>
    </SourceDemo>
  )
}
