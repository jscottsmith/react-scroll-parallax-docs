import React from "react"
import { Parallax } from "react-scroll-parallax"
import { Wave1, Wave2, Wave3, Wave4, Wave5, Wave6 } from "./waves"

const waves = [Wave1, Wave2, Wave3, Wave4, Wave5, Wave6]

export const WavesOnScreen = () => {
  return (
    <div className="relative p-lg md:p-2xl xl:p-3xl 2xl:p-4xl">
      <div className="absolute inset-0">
        {waves.map((Wave, i) => {
          return (
            <div key={i}>
              <Wave className="absolute top-0 left-0 right-0" />
              <Wave className="absolute bottom-0 left-0 right-0 -scale-y-100" />
            </div>
          )
        })}
        <div className="absolute inset-0 bg-gray-200 opacity-90" />
      </div>
      <div
        // NOTE: will-change is a hack for safari so the overflow is rounded to the border radius
        className="relative overflow-hidden rounded-3xl shadow-xl will-change-transform"
        style={{ backgroundColor: "#BF7676", aspectRatio: "1.85 / 1" }}
      >
        <div className="">
          {waves.map((Wave, i) => {
            const n = i + 1
            const endTranslate = n * 10
            // const endScale = 2 - 0.1 * n
            return (
              <div key={i}>
                <Parallax
                  translateY={[-0.3, endTranslate * -1]}
                  // scaleY={[1, endScale]}
                  innerClassName="origin-top"
                  className="absolute top-0 left-0 right-0"
                  shouldStartAnimationInitialInView
                >
                  <Wave />
                </Parallax>
                <Parallax
                  translateY={[0.3, endTranslate]}
                  // scaleY={[1, endScale]}
                  innerClassName="origin-bottom"
                  className="absolute bottom-0 left-0 right-0"
                  shouldStartAnimationInitialInView
                >
                  <Wave className="-scale-y-100" />
                </Parallax>
              </div>
            )
          })}
        </div>
        <div className="bg-white rounded-full w-3 h-3 absolute top-4 left-4" />
        <div className="bg-white rounded-full w-3 h-3 absolute top-4 left-9" />
        <div className="bg-white rounded-full w-3 h-3 absolute top-4 left-14" />
        <div className="absolute inset-0 overflow-hidden rounded-3xl border-8 border-solid border-white" />
      </div>
    </div>
  )
}
