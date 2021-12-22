import React from "react"
import { NavLink } from "./nav-link"

export const Navigation = () => {
  return (
    <nav className="flex w-full justify-between px-md">
      <NavLink to="/">
        <code className="bg-gray-100 inline-block rounded-md px-2">
          react-scroll-parallax
        </code>
      </NavLink>
      <div className="flex gap-2">
        <NavLink to="/speed">Speed</NavLink>
        <NavLink to="/easing">Easing</NavLink>
      </div>
    </nav>
  )
}
