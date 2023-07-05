import React from 'react'
import Proyecto from '../Componentes/Proyecto'
// importamos la imagen de la carpeta public/images/proyectos
 import Proyecto1 from '@/public/proyectos/segurmaxp.webp'
 import Proyecto2 from '@/public/proyectos/861shots_so.jpg'
const Proyectos = () => {
    return (
    <>
    <h1 className='text-slate-50 font-bold uppercase '>Proyectos</h1>
    <p className='text-slate-50 font-medium mt-2  '>Estos son algunos de mis proyectos</p>
  
    
    <div className='mt-5 flex flex-wrap w-full p-2 md:max-w-3xl items-center justify-center gap-2 md:flex-row flex-col'>
        <Proyecto nombre="Segurmax RG" img={Proyecto2} des="Sitio Web Coorporativo con distintas paginas para cada servicio" />
        <Proyecto nombre="Segurmax RG" img={Proyecto2} des="Sitio Web Coorporativo con distintas paginas para cada servicio" />
        <Proyecto nombre="Segurmax RG" img={Proyecto2} des="Sitio Web Coorporativo con distintas paginas para cada servicio" />

    </div>



    </>
  )
}

export default Proyectos