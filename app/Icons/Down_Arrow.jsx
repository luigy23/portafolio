import React from 'react'

const Down_Arrow = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 5.25-7.5 7.5-7.5-7.5m15 6-7.5 7.5-7.5-7.5"
    />
  </svg>
)
  
}

export default Down_Arrow