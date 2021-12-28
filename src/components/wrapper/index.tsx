import React from "react"
import { PropsWithChildren } from "react"
import cx from "classnames"

type Props = PropsWithChildren<{
  as?: any
  className?: string
}>

export const Wrapper = (props: Props) => {
  const Tagname = props.as || "div"
  return (
    <Tagname className={cx("px-md md:px-lg lg:px-xl", props.className)}>
      {props.children}
    </Tagname>
  )
}
