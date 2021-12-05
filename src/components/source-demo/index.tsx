import React, { PropsWithChildren } from "react"

type SourceDemoProps = PropsWithChildren<{
  title: string
  source: string
}>

export const SourceDemo = (props: SourceDemoProps) => {
  return (
    <section
      style={{ minHeight: "200vh" }}
      className="flex flex-row bg-gray-50"
    >
      <div className="flex items-start w-1/3">
        <div className="flex items-center sticky top-lg h-screen w-full">
          <div className="w-full m-lg p-lg bg-white rounded-md border-solid border border-gray-200 text-gray-700">
            <h1 className="text-2xl mb-lg">{props.title}</h1>
            <pre className="font-mono bg-gray-200 p-md rounded-md">
              {props.source}
            </pre>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-2/3 bg-black px-bg">
        {props.children}
      </div>
    </section>
  )
}
