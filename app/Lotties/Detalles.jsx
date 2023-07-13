"use client"

import React from 'react'
import Lottie from 'react-lottie-player'
import detalle from '@/public/lotties/detalle.json'

const Detalles = (props) => {
  return (
<div {...props}>
    <Lottie
        loop
        animationData={detalle}
        play
        style={{ width: '100%', height: 'auto' }}
    />
</div>
  )
}

export default Detalles