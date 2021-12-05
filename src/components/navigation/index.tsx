import React from "react"
import { NavLink } from "./nav-link"

export const Navigation = () => {
  return (
    <nav className="flex gap-md text-xl">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/speed">Speed</NavLink>
    </nav>
  )
}
