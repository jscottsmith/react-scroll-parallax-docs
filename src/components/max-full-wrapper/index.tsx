import React from "react"

import cx from "classnames"
import { FullWrapper, FullWrapperProps } from "../full-wrapper"

type Props = FullWrapperProps & { maxWidth?: string; innerClassName?: string }

export const MaxFullWrapper = (props: Props) => {
  const { className, innerClassName, maxWidth, children, ...rest } = props
  return (
    <FullWrapper className={cx("mx-auto", className)} {...rest}>
      <div className={cx(maxWidth, innerClassName, "mx-auto w-full")}>
        {children}
      </div>
    </FullWrapper>
  )
}

MaxFullWrapper.defaultProps = {
  maxWidth: "max-w-screen-4xl",
}
