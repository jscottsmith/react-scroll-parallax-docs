import React from "react"
import { Navigation } from "./navigation"

export const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-white shadow-sm flex items-center justify-center h-16">
      <Navigation />
    </div>
  )
}
