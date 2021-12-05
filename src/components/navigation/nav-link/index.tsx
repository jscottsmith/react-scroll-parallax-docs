import React from "react"
import { Link, GatsbyLinkProps } from "gatsby"

interface NavLinkProps extends Omit<GatsbyLinkProps<{}>, "ref"> {
  //   active: boolean
}

export const NavLink = (props: NavLinkProps) => {
  const { children, ...rest } = props
  return (
    <Link
      className="font-bold text-4xl text-gray-700 hover:text-purple-600"
      activeClassName="text-purple-800 underline"
      {...rest}
    >
      {props.children}
    </Link>
  )
}
