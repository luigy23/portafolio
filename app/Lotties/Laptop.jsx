"use client"

import React from 'react'
import Lottie from 'react-lottie-player'
import laptop from '@/public/lotties/diseno.json'

const Laptop = (props) => {
  return (
<div {...props}>
    <Lottie
        loop
        animationData={laptop}
        play
        style={{ width: '100%', height: 'auto' }}
    />
</div>
  )
}

export default Laptop