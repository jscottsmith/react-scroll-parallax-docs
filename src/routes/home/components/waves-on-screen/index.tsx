import React from "react"
import { Parallax } from "react-scroll-parallax"
import { Wave1, Wave2, Wave3, Wave4, Wave5, Wave6 } from "./waves"

const waves = [Wave1, Wave2, Wave3, Wave4, Wave5, Wave6]

export const WavesOnScreen = () => {
  return (
    <div className="relative p-lg md:p-2xl xl:p-3xl 2xl:p-4xl 3xl:p-5xl">
      {/* Faded background elements */}
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
      {/* Screen and parallax elements */}
      <Parallax
        scale={[1, 0.9]}
        easing="easeInOutQuad"
        shouldStartAnimationInitialInView
      >
        <div
          // NOTE: will-change is a hack for safari so the overflow is rounded to the border radius
          className="relative overflow-hidden rounded-3xl lg:rounded-4xl shadow-xl will-change-transform"
          style={{ backgroundColor: "#BF7676", aspectRatio: "2.05 / 1" }}
        >
          <div className="">
            {waves.map((Wave, i) => {
              const n = i + 1
              const endTranslate = n * 10
              return (
                <div key={i}>
                  <Parallax
                    translateY={[-0.3, endTranslate * -1]}
                    innerClassName="origin-top"
                    className="absolute top-0 left-0 right-0"
                    shouldStartAnimationInitialInView
                  >
                    <Wave />
                  </Parallax>
                  <Parallax
                    translateY={[0.3, endTranslate]}
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
          {/* UI Elements */}
          <div className="bg-white shadow-sm rounded-full w-2 lg:w-3 h-2 lg:h-3 absolute top-4 lg:top-8 left-4 lg:left-8" />
          <div className="bg-white shadow-sm rounded-full w-2 lg:w-3 h-2 lg:h-3 absolute top-4 lg:top-8 left-8 lg:left-14" />
          <div className="bg-white shadow-sm rounded-full w-2 lg:w-3 h-2 lg:h-3 absolute top-4 lg:top-8 left-12 lg:left-20" />
          <div className="absolute inset-0 overflow-hidden rounded-3xl lg:rounded-4xl border-8 lg:border-10 xl:border-15 border-solid border-white" />
        </div>
      </Parallax>
    </div>
  )
}
