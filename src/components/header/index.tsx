import { Link } from "gatsby"
import React from "react"
import { Logo } from "../logo"
import { Navigation } from "./navigation"

export const Header = () => {
  return (
    <div className="z-50 bg-white shadow-sm border-b border-gray-100 flex items-center justify-between h-16 px-md lg:px-lg">
      <Link
        to="/"
        className="font-bold text-lg text-gray-700 hover:text-blue-600"
      >
        <Logo className="inline-block w-8 mr-sm" />
        React Scroll Parallax
      </Link>
      <Navigation />
    </div>
  )
}
