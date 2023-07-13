"use client"

import React from 'react'
import Lottie from 'react-lottie-player'
import soporte from '@/public/lotties/soporte.json'

const Soporte = (props) => {
  return (
<div {...props}>
    <Lottie
        loop
        animationData={soporte}
        play
        style={{ width: '100%', height: 'auto' }}
    />
</div>
  )
}

export default Soporte