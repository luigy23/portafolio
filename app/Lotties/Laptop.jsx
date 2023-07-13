import React from 'react'
import Lottie from 'react-lottie-player'
import laptop from '@/public/lotties/laptop.json'

const Laptop = () => {
  return (
    <Lottie
        loop
        animationData={laptop}
        play
        style={{ width: '100%', height: 'auto' }}
    />
  )
}

export default Laptop