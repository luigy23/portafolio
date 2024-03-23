"use client"
import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const SliderProyectos = ({proyectos}) => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
     <div className="w-5/6 f items-center justify-center p-2">
    <Slider
    {...settings}
    >
     <div className='w-40 h-20 bg-slate-700'>
        <h3>1</h3>
      </div>
      <div className='w-40 h-20 bg-slate-700'>
        <h3>2</h3>
      </div>
      <div className='w-40 h-20 bg-slate-700'>
        <h3>3</h3>
      </div>
      <div className='w-40 h-20 bg-slate-700'>
        <h3>4</h3>
      </div>
      <div className='w-40 h-20 bg-slate-700'>
        <h3>5</h3>
      </div>
    </Slider>
    </div>

  )
}

export default SliderProyectos