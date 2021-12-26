import React from "react"

export const Logo = props => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0" width="40" height="40" rx="4" fill="#F3F58A">
        <animate
          attributeName="y"
          values="0;0;20;20;0"
          dur="5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="10" y="10" width="40" height="40" rx="4" fill="#63E4B6"></rect>
      <rect x="20" y="20" width="40" height="40" rx="4" fill="#818BDF">
        {/* <animate
          attributeName="x"
          values="20;20;0;0;20"
          dur="3s"
          repeatCount="indefinite"
        /> */}
        <animate
          attributeName="y"
          values="20;20;0;0;20"
          dur="5s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  )
}
