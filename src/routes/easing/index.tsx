import React from "react"
import { EasingArray } from "../../components/easing-array"
import { SourceDemo } from "../../components/source-demo"
import { EASING } from "./constants"

export const Easing = () => {
  return (
    <>
      {EASING.map((easing, i) => (
        <SourceDemo
          key={i}
          title={`Easing preset: ${easing}`}
          source={`<Parallax easing="${easing}">`}
        >
          <EasingArray easing={easing} />
        </SourceDemo>
      ))}
    </>
  )
}
