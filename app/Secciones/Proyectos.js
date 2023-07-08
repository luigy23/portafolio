"use client"

import React, { useEffect, useState } from 'react'
import Proyecto from '../Componentes/Proyecto'
// importamos la imagen de la carpeta public/images/proyectos
import Proyecto1 from '@/public/proyectos/segurmaxp.png'
import Proyecto2 from '@/public/proyectos/Yeli2.png'
import Tabs from '../Componentes/Tabs'
import estilos from '@/app/Styles/Proyecto.module.css'
import { getProyectos } from '../Utils/supabase'


const Proyectos = () => {

  const [proyectos, setProyectos] = useState([])
  useEffect(() => {
    getProyectos().then((data) => {
      setProyectos(data)
    })
  }, [])


  return (
    <>
      <h1 className='text-slate-50 font-bold uppercase '>Proyectos</h1>
      <p className='text-slate-50 font-medium mt-2  '>Estos son algunos de mis proyectos</p>


      <div className={estilos.proyectos}>
        <Tabs />
        {
          // map con proyectos con el prop "or" true cada 1 proyecto:
          proyectos && 
          proyectos.map((proyecto, index) => {
              return (
                <Proyecto key={index} nombre={proyecto.Nombre} des={proyecto.Descripcion} img={proyecto.img} tec={proyecto.Tecnologias} />
              )



          })
        }


      </div>



    </>
  )
}

export default Proyectos