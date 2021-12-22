import React from "react"
import { Parallax } from "react-scroll-parallax"

const ITEMS = Array(10).fill(0)

type EasingArray = {
  easing: string
}
const translateXLeft = ["-200px", "200px"]
const translateXRight = ["200px", "-200px"]
export const EasingArray = props => {
  return (
    <div className="flex flex-row justify-self-stretch">
      <div>
        {ITEMS.map((_, i) => (
          <Parallax translateX={translateXLeft} easing={props.easing} key={i}>
            <div className="mb-sm border-2 border-green-200 border-solid flex items-center justify-center bg-green-400 h-8 w-8 rounded-lg" />
          </Parallax>
        ))}
      </div>
      <div>
        {ITEMS.map((_, i) => (
          <Parallax translateX={translateXRight} easing={props.easing} key={i}>
            <div className="mb-sm border-2 border-purple-200 border-solid flex items-center justify-center bg-purple-400 h-8 w-8 rounded-lg" />
          </Parallax>
        ))}
      </div>
    </div>
  )
}
