import React from "react"
import { Parallax } from "react-scroll-parallax"
import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { SourceDemo } from "../components/source-demo"
import { ElementProgress } from "../components/source-demo/components/element-progress"
import { PageContainer } from "../templates/page-container"

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <Header />
      <SourceDemo
        title="How it works"
        description="As the element scrolls past the viewport a css translate effect is applied based on the original element's position relative to the viewport. Using the speed will automatically apply a translateY css style (or translateX if the scroll axis is horizontal)."
        source={`<Parallax speed={-10}>\n<Parallax speed={10}>`}
      >
        <div className="flex flex-row items-center justify-evenly w-full">
          <Parallax
            speed={-10}
            className="rounded-lg bg-gray-600 bg-opacity-50"
          >
            <div className="border-2 border-green-200 border-solid flex items-center justify-center bg-green-400 h-48 w-48 rounded-lg">
              <p className="text-center font-bold">Slower</p>
            </div>
          </Parallax>
          <Parallax speed={10} className="rounded-lg bg-gray-600 bg-opacity-50">
            <div className="border-2 border-red-200 border-solid flex items-center justify-center bg-red-400 h-48 w-48 rounded-lg">
              <p className="text-center font-bold">Faster</p>
            </div>
          </Parallax>
        </div>
      </SourceDemo>
      <ElementProgress />
      <Header />
    </PageContainer>
  )
}
