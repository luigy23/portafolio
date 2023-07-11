"use client"

import React, { useEffect, useState } from 'react'
import Proyecto from '../Componentes/Proyecto'
// importamos la imagen de la carpeta public/images/proyectos

import Tabs from '../Componentes/Tabs'
import estilos from '@/app/Styles/Proyecto.module.css'
import { getProyectos } from '../Utils/supabase'


const Proyectos = () => {

  const [proyectos, setProyectos] = useState([])
  const [proyectosFiltrados, setProyectosFiltrados] = useState([])
  useEffect(() => {
    getProyectos().then((data) => {
      setProyectos(data)
      setProyectosFiltrados(data)
      
    })

  }, [])


  //funcion para filtrar los proyectos por tecnologias (verifica si el proyecto tiene la tecnologia que se le pasa por parametro, en el array de tecnologias del proyecto)
  const filtrar = (tecnologia) => {


    if (tecnologia === 'All') {
      setProyectosFiltrados(proyectos)
      return
    }
    let proyectosFiltrados = proyectos.filter((proyecto) => {
      return proyecto.Tecnologias.includes(tecnologia)
    })
    setProyectosFiltrados(proyectosFiltrados)


  }



  return (
    <>
    <section id='proyectos' className='w-full py-12 min-h-screen relative  bg-smoke-800 flex flex-col items-center justify-start'>
      <h1 className='text-slate-50 font-bold uppercase '>Proyectos</h1>
      <p className='text-slate-50 font-medium mt-2  '>Estos son algunos de mis proyectos</p>


      <div className={estilos.proyectos}>
        <Tabs filtrar={filtrar} />
        
 
        {
          proyectosFiltrados &&
          proyectosFiltrados.map((proyecto, index) => {
              return (
                <Proyecto key={index} nombre={proyecto.Nombre} des={proyecto.Descripcion} img={proyecto.img} tec={proyecto.Tecnologias} />
              )



          })
        }
 <span className='blob2 '></span>

      </div>
      </section>


    </>
  )
}

export default Proyectos