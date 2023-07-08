import React from 'react'
import Proyecto from '../Componentes/Proyecto'
// importamos la imagen de la carpeta public/images/proyectos
import Proyecto1 from '@/public/proyectos/segurmaxp.png'
import Proyecto2 from '@/public/proyectos/Yeli2.png'
import Tabs from '../Componentes/Tabs'
import estilos from '@/app/Styles/Proyecto.module.css'

const Proyectos = () => {


  const proyectos = [
    {
      nombre: 'Segurmax RG',
      img: Proyecto1,
      des: 'Sitio Web Coorporativo con distintas paginas para cada servicio',
      tecnologias: ['React', 'Next', 'Tailwind', 'Framer Motion']
    },
    {
      nombre: 'Yeli Fashion',
      img: Proyecto2,
      des: 'Tienda online de accesorios y ropa para una tienda en Miami FL',
      tecnologias: ['React', 'Next', 'Tailwind', 'Framer Motion']
    },
    {
      nombre: 'Gym IA',
      img: Proyecto1,
      des: 'Aplicacion web que genera rutinas de entrenamiento personalizadas para cada usuario usando la api de chatgpt.',
      tecnologias: ['React', 'Next', 'Tailwind', 'Framer Motion']
    },
  ]


  return (
    <>
      <h1 className='text-slate-50 font-bold uppercase '>Proyectos</h1>
      <p className='text-slate-50 font-medium mt-2  '>Estos son algunos de mis proyectos</p>


      <div className={estilos.proyectos}>
        <Tabs />
        {
          // map con proyectos con el prop "or" true cada 1 proyecto:
          proyectos.map((proyecto, index) => {
            if (index % 2 === 0) {
              return (
                <Proyecto nombre={proyecto.nombre} des={proyecto.des} img={proyecto.img} or={false} />
              )
            }
            return (
              <Proyecto nombre={proyecto.nombre} des={proyecto.des} img={proyecto.img} or={true} />
            )



          })
        }


      </div>



    </>
  )
}

export default Proyectos