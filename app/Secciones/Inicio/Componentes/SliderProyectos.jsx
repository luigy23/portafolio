"use client"
import React, { useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import { getProyectos } from '@/app/Utils/supabase'
import ProyectoItem from './ProyectoItem'

const SliderProyectos = () => {

  const [proyectos, setProyectos] = useState([]);
  const [proyectosCargados, setProyectosCargados] = useState(false);
  const [InfoProyectoActivo, setInfoProyectoActivo] = useState(proyectos[1]);

  useEffect(() => {
    getProyectos().then((data) => {
      setProyectos(data);
      setProyectosCargados(true);
    });

    console.log(instanceRef.current)
  }, []);


  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
    
    },

    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <>
    
        <div ref={sliderRef} className="keen-slider overflow-y-visible">
          {proyectos.map((proyecto, idx) => (

            <div key={idx} className="keen-slider__slide 
            h-40   ">
              <ProyectoItem
                
                proyecto={proyecto}
                
                index={idx}
                setInfoProyectoActivo={setInfoProyectoActivo}
              />
            </div>
          ))}


       
        
        
        </div>

    </>
  );
}

export default SliderProyectos


function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}