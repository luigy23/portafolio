import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#FBD116" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4Z" />
      <path fill="#22408C" d="M0 18h36v7H0v-7Z" />
      <path fill="#CE2028" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-2H0v2Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h36v36H0z" />
      </clipPath>
    </defs>
  </svg>
)
export { SvgComponent as Colombia }