import React from "react"
import { Parallax } from "react-scroll-parallax"

const PARALLAX = ["P", "A", "R", "A", "L", "L", "A", "X"]
export const Hero = () => {
  return (
    <article className="px-bg bg-blue-500 h-screen flex items-center justify-center overflow-hidden">
      <h1 className="text-3xl flex items-center gap-md">
        {PARALLAX.map((letter, i) => (
          <Parallax key={i} speed={-i - i * 2}>
            <span className="inline-block border-solid border-blue-900 border-2 rounded-lg p-1">
              <span
                className="flex bg-blue-400 rounded-md items-center justify-center"
                style={{
                  width: 50 + i * 6,
                  height: 50 + i * 6,
                }}
              >
                {letter}
              </span>
            </span>
          </Parallax>
        ))}
      </h1>
    </article>
  )
}
