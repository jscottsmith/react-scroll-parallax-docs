import React from "react"
import { Link, GatsbyLinkProps } from "gatsby"

interface NavLinkProps extends Omit<GatsbyLinkProps<{}>, "ref"> {
  //   active: boolean
}

export const NavLink = (props: NavLinkProps) => {
  const { children, ...rest } = props
  return (
    <Link
      className="h-full font-medium md:text-lg text-gray-700 hover:text-blue-600"
      activeClassName="text-blue-800 border-b-4 border-blue-800"
      {...rest}
    >
      {props.children}
    </Link>
  )
}
