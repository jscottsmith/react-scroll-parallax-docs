import React, { PropsWithChildren } from "react"

type SourceDemoProps = PropsWithChildren<{
  title: string
  source: string
  description?: string
}>

export const SourceDemo = (props: SourceDemoProps) => {
  return (
    <section style={{ minHeight: "250vh" }} className="flex bg-gray-50">
      <div className="relative hidden lg:flex flex-row lg:w-1/3">
        <div className="sticky top-lg flex items-center justify-stretch w-full h-screen">
          <div className="relative w-full">
            <div className="bg-white rounded-md border-solid border border-gray-200 text-gray-700 m-lg p-lg">
              <h1 className="text-2xl mb-md">{props.title}</h1>
              {props.description && (
                <p className="mb-md">{props.description}</p>
              )}
              <pre className="text-sm font-mono bg-gray-200 p-sm rounded-md overflow-x-auto w-full">
                {props.source}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full lg:w-2/3 bg-black px-bg overflow-hidden">
        {props.children}
      </div>
    </section>
  )
}
