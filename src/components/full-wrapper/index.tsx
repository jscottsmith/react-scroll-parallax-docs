import React from "react"
import cx from "classnames"
import { PropsWithChildren } from "react"
import { Wrapper } from "../wrapper"

export type FullWrapperProps = PropsWithChildren<{
  as?: any
  className?: string
  padTop?: boolean
  padBottom?: boolean
}>

const defaultProps = {
  padTop: true,
  padBottom: true,
}

export const FullWrapper = (props: FullWrapperProps) => {
  return (
    <Wrapper
      as={props.as}
      className={cx(
        {
          "pt-md md:pt-lg lg:pt-xl": props.padTop,
          "pb-md md:pb-lg lg:pb-xl": props.padBottom,
        },

        props.className
      )}
    >
      {props.children}
    </Wrapper>
  )
}

FullWrapper.defaultProps = defaultProps
