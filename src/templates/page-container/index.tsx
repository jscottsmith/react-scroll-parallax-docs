import React, { PropsWithChildren } from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { ParallaxRouteUpdate } from "../../components/parallax-route-update"

export const PageContainer = (props: PropsWithChildren<{}>) => {
  return (
    <ParallaxProvider>
      <ParallaxRouteUpdate />
      <main>{props.children}</main>
    </ParallaxProvider>
  )
}
