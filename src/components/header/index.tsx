import { Link } from "gatsby"
import React from "react"
import { Logo } from "../logo"
import { Navigation } from "./navigation"

export const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-white shadow-sm flex items-center justify-between h-16 px-md">
      <Link
        to="/"
        className="font-bold text-lg text-gray-700 hover:text-blue-600"
      >
        <Logo className="inline-block w-10 mr-sm" />
        React Scroll Parallax
      </Link>
      <Navigation />
    </div>
  )
}
