import { useEffect } from "react"
import { useLocation } from "@reach/router"
import { useController } from "react-scroll-parallax"

function useUpdateControllerOnRouteChange() {
  const location = useLocation()
  const parallaxController = useController()

  useEffect(() => {
    parallaxController.update()
  }, [location.pathname])
}

export const ParallaxRouteUpdate = () => {
  useUpdateControllerOnRouteChange()
  return null
}
