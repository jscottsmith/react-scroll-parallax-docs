import React, { PropsWithChildren } from "react"
import { ParallaxProvider } from "react-scroll-parallax"

export const PageContainer = (props: PropsWithChildren<{}>) => {
  return (
    <ParallaxProvider>
      <main>{props.children}</main>
    </ParallaxProvider>
  )
}
