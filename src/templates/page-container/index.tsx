import React, { PropsWithChildren } from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { Header } from "../../components/header"
import { ParallaxRouteUpdate } from "../../components/parallax-route-update"

export const PageContainer = (props: PropsWithChildren<{}>) => {
  return (
    <ParallaxProvider>
      <Header />
      <ParallaxRouteUpdate />
      <main>{props.children}</main>
    </ParallaxProvider>
  )
}
