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
      <rect x="0" width="20" height="20" rx="4" fill="#394F68">
        <animate
          attributeName="y"
          values="0;0;40;40;0"
          dur="5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="10" y="10" width="30" height="30" rx="4" fill="#FFD27B">
        <animate
          attributeName="y"
          values="10;10;20;20;10"
          dur="5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="20" y="20" width="40" height="40" rx="4" fill="#FA7A5E">
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
