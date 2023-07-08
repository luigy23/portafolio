import Image from 'next/image'
import React from 'react'
import estilos from '@/app/Styles/Proyecto.module.css'

const Proyecto = ({ nombre, img, des, or }) => {
    return (

<div className={estilos.proyecto}>
                <div className={estilos.contenedorImg}>
                    <Image
                        src={img}
                        alt={nombre}
                        height={224}
                        className={estilos.imagen}
                    />
                </div>
                <div className='flex flex-col  pr-4 w-3/5 '>
                    <h3 className='font-semibold text-xl'>{nombre}</h3>
                    <p className=' text-sm mt-1 text-slate-300 whitespace-pre-wrap'>{des}</p>
                </div>

            </div>





    )
}

export default Proyecto

{/* <div className='flex flex-col items-center p-2'>
<h3 className='font-semibold'>{nombre}</h3>
<p className=' font-normal mt-2  '>Estos son algunos de mis proyectos</p>
</div> */}