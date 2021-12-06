import React from "react"
import { Parallax } from "react-scroll-parallax"

const PARALLAX = ["P", "A", "R", "A", "L", "L", "A", "X"]
export const Hero = () => {
  return (
    <article className="bg-purple-300 h-screen flex items-center justify-center">
      <h1 className="text-4xl flex gap-md">
        {PARALLAX.map((letter, i) => (
          <Parallax speed={-i - i * 2}>
            <span className="flex w-24 h-24 bg-purple-200 rounded-md items-center justify-center">
              {letter}
            </span>
          </Parallax>
        ))}
      </h1>
    </article>
  )
}
