import React from "react"
import { GithubLogo } from "../../github-logo"
import { NavLink } from "./nav-link"

export const Navigation = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-2 md:gap-5">
        <NavLink to="/speed">Speed</NavLink>
        <NavLink to="/easing">Easing</NavLink>
        <a
          className="h-full font-bold text-lg text-gray-700 hover:text-blue-600"
          href="https://github.com/jscottsmith/react-scroll-parallax"
          aria-label="GitHub Repository"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubLogo />
        </a>
      </div>
    </nav>
  )
}
