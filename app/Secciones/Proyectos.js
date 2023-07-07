import React from 'react'
import Proyecto from '../Componentes/Proyecto'
// importamos la imagen de la carpeta public/images/proyectos
 import Proyecto1 from '@/public/proyectos/segurmax2.png'
 import Proyecto2 from '@/public/proyectos/Yeli2.png'
const Proyectos = () => {
    return (
    <>
    <h1 className='text-slate-50 font-bold uppercase '>Proyectos</h1>
    <p className='text-slate-50 font-medium mt-2  '>Estos son algunos de mis proyectos</p>
  
    
    <div className=' mt-5 flex flex-wrap w-full p-2 md:max-w-5xl items-center justify-center gap-5 md:flex-row flex-col '>
        
        <Proyecto nombre="Segurmax RG" img={Proyecto1} des="Sitio Web Coorporativo con distintas paginas para cada servicio" />
        <Proyecto nombre="Yeli Fashion" img={Proyecto2} des="Tienda online de accesorios y ropa para una tienda en Miami FL" or={true} />
       
       
    </div>



    </>
  )
}

export default Proyectos