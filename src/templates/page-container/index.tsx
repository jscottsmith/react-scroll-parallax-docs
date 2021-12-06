import React, { PropsWithChildren, useEffect } from "react"
import { useLocation } from "@reach/router"
import { ParallaxProvider, useController } from "react-scroll-parallax"

function useUpdateControllerOnRouteChange() {
  const location = useLocation()
  const parallaxController = useController()
  useEffect(() => {
    parallaxController.update()
  }, [location.pathname])
}

export const PageContainer = (props: PropsWithChildren<{}>) => {
  useUpdateControllerOnRouteChange()
  return (
    <ParallaxProvider>
      <main>{props.children}</main>
    </ParallaxProvider>
  )
}
