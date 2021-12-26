import React from "react"
import { NavLink } from "./nav-link"

export const Navigation = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-2">
        <NavLink to="/speed">Speed</NavLink>
        <NavLink to="/easing">Easing</NavLink>
      </div>
    </nav>
  )
}
