import React from "react"
import { SourceDemo } from "../../components/source-demo"
import { PageContainer } from "../../templates/page-container"
import { Parallax } from "react-scroll-parallax"
import { Header } from "../../components/header"

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <SourceDemo title="Slower Speed" source="<Parallax speed={-10}>">
        <div className="flex flex-row items-center justify-evenly w-full">
          <Parallax speed={-10}>
            <div className="border-2 border-green-200 border-solid flex items-center justify-center bg-green-400 h-48 w-48 rounded-md">
              <p className="text-center font-bold">Slower</p>
            </div>
          </Parallax>
          <div className="border-2 border-gray-500 border-solid flex items-center justify-center bg-gray-700 h-56 w-56 rounded-md">
            <p className="text-center text-gray-200 font-bold">Normal</p>
          </div>
        </div>
      </SourceDemo>
      <SourceDemo title="Faster Speed" source="<Parallax speed={10}>">
        <div className="flex flex-row items-center justify-evenly w-full">
          <Parallax speed={10}>
            <div className="border-2 border-purple-200 border-solid flex items-center justify-center bg-purple-400 h-48 w-48 rounded-md">
              <p className="text-center font-bold">Faster</p>
            </div>
          </Parallax>
          <div className="border-2 border-gray-500 border-solid flex items-center justify-center bg-gray-700 h-32 w-32 rounded-md">
            <p className="text-center text-gray-200 font-bold">Normal</p>
          </div>
        </div>
      </SourceDemo>
      <SourceDemo title="Or much faster..." source="<Parallax speed={40}>">
        <div className="flex flex-row items-center justify-evenly w-full">
          <Parallax speed={40}>
            <div className="border-2 border-purple-300 border-solid flex items-center justify-center bg-purple-500 h-72 w-72 rounded-md">
              <p className="text-center font-bold">Much faster...</p>
            </div>
          </Parallax>
          <div className="border-2 border-gray-500 border-solid flex items-center justify-center bg-gray-700 h-24 w-24 rounded-md">
            <p className="text-center text-gray-200 font-bold">Normal</p>
          </div>
        </div>
      </SourceDemo>
      <SourceDemo
        title="At your own pace"
        source={`<Parallax speed={30}>\n<Parallax speed={20}>\n<Parallax speed={10}>`}
      >
        <div className="flex flex-row items-center justify-evenly w-full">
          <Parallax speed={30}>
            <div className="border-2 border-blue-400 border-solid flex items-center justify-center bg-blue-600 h-64 w-64 rounded-md">
              <p className="text-center font-bold">30</p>
            </div>
          </Parallax>
          <Parallax speed={20}>
            <div className="border-2 border-blue-300 border-solid flex items-center justify-center bg-blue-500 h-48 w-48 rounded-md">
              <p className="text-center font-bold">20</p>
            </div>
          </Parallax>
          <Parallax speed={10}>
            <div className="border-2 border-blue-200 border-solid flex items-center justify-center bg-blue-500 h-36 w-36 rounded-md">
              <p className="text-center font-bold">10</p>
            </div>
          </Parallax>
          <div className="border-2 border-gray-500 border-solid flex items-center justify-center bg-gray-700 h-24 w-24 rounded-md">
            <p className="text-center text-gray-200 font-bold">Normal</p>
          </div>
        </div>
      </SourceDemo>

      <SourceDemo
        title="...slowpokes"
        source={`<Parallax speed={-30}>\n<Parallax speed={-20}>\n<Parallax speed={-10}>`}
      >
        <div className="flex flex-row items-center justify-evenly w-full">
          <Parallax speed={-30}>
            <div className="border-2 border-pink-400 border-solid flex items-center justify-center bg-pink-600 h-24 w-24 rounded-md">
              <p className="text-center font-bold">-30</p>
            </div>
          </Parallax>
          <Parallax speed={-20}>
            <div className="border-2 border-pink-300 border-solid flex items-center justify-center bg-pink-500 h-36 w-36 rounded-md">
              <p className="text-center font-bold">-20</p>
            </div>
          </Parallax>
          <Parallax speed={-10}>
            <div className="border-2 border-pink-200 border-solid flex items-center justify-center bg-pink-500 h-48 w-48 rounded-md">
              <p className="text-center font-bold">-10</p>
            </div>
          </Parallax>
          <div className="border-2 border-gray-500 border-solid flex items-center justify-center bg-gray-700 h-64 w-64 rounded-md">
            <p className="text-center text-gray-200 font-bold">Normal</p>
          </div>
        </div>
      </SourceDemo>
    </PageContainer>
  )
}
