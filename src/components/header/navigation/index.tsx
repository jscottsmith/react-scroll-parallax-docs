import React from "react"
import { GithubLogo } from "../../github-logo"
import { NavLink } from "./nav-link"

export const Navigation = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-2">
        <NavLink to="/speed">Speed</NavLink>
        <NavLink to="/easing">Easing</NavLink>
        <NavLink
          to="https://github.com/jscottsmith/react-scroll-parallax"
          aria-label="GitHub Repository"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubLogo />
        </NavLink>
      </div>
    </nav>
  )
}
