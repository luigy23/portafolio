import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1.25em"
    width="1.25em"
    viewBox="0 0 50 50"


    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          fill="#fff"
          d="M25 0C11.21 0 0 11.21 0 25s11.21 25 25 25c4.375 0 8.477-1.133 12.031-3.086L18.906 21.602v14.296H16.25v-19.57h2.656l19.727 29.61C45.469 41.483 50 33.788 50 25 50 11.21 38.79 0 25 0Zm8.633 33.047-2.93-4.414V16.328h2.93v16.719Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h50v50H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0h50v50H0z" />
      </clipPath>
    </defs>
  </svg>
)
export { SvgComponent as Nexticon }