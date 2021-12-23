import React from "react"
import { SourceDemo } from "../../components/source-demo"
import { PageContainer } from "../../templates/page-container"
import { Header } from "../../components/header"
import { EasingArray } from "../../components/easing-array"

const EASING = [
  "ease",
  "easeIn",
  "easeOut",
  "easeInOut",
  "easeInQuad",
  "easeInCubic",
  "easeInQuart",
  "easeInQuint",
  "easeInSine",
  "easeInExpo",
  "easeInCirc",
  "easeOutQuad",
  "easeOutCubic",
  "easeOutQuart",
  "easeOutQuint",
  "easeOutSine",
  "easeOutExpo",
  "easeOutCirc",
  "easeInOutQuad",
  "easeInOutCubic",
  "easeInOutQuart",
  "easeInOutQuint",
  "easeInOutSine",
  "easeInOutExpo",
  "easeInOutCirc",
  "easeInBack",
  "easeOutBack",
  "easeInOutBack",
]

export default function Easing() {
  return (
    <PageContainer>
      <Header />
      {EASING.map((easing, i) => (
        <SourceDemo
          key={i}
          title={`Easing preset: ${easing}`}
          source={`<Parallax easing="${easing}">`}
        >
          <EasingArray easing={easing} />
        </SourceDemo>
      ))}
    </PageContainer>
  )
}
