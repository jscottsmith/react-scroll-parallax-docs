import React from "react"
import cx from "classnames"
import { PropsWithChildren } from "react"
import { Wrapper } from "../wrapper"

type Props = PropsWithChildren<{
  as?: any
  className?: string
  maxWidth?: string
}>

export const MaxWrapper = (props: Props) => {
  return (
    <Wrapper as={props.as} className={cx("mx-auto w-full")}>
      <div className={cx(props.maxWidth, props.className, "mx-auto w-full")}>
        {props.children}
      </div>
    </Wrapper>
  )
}

MaxWrapper.defaultProps = {
  maxWidth: "max-w-screen-4xl",
}
