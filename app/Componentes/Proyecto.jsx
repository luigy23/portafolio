import Image from 'next/image'
import React from 'react'
import estilos from '@/app/Styles/Proyecto.module.css'

const Proyecto = ({ nombre, img, des, or }) => {
    return (

        or  ?
            (<div className={estilos.proyecto2}>
                <div className='  items-center flex  flex-col rou '>
                    <Image
                        src={img}
                        alt={nombre}
                        width={320}
                        className={estilos.imagen}
                    />
                </div>
                <div className='flex flex-col  pr-4  '>
                    <h3 className='font-semibold text-xl'>{nombre}</h3>
                    <p className=' text-sm mt-1 text-slate-300 '>{des}</p>
                </div>

            </div>) 
            : (
                <div className={estilos.proyecto}>
                <div className='flex flex-col  pl-4  '>
                    <h3 className='font-semibold text-xl'>{nombre}</h3>
                    <p className=' text-sm mt-1 text-slate-300 '>{des}</p>
                </div>
                <div className='  items-center flex  flex-col rou '>
                    <Image
                        src={img}
                        alt={nombre}
                        width={320}
                        className={estilos.imagen}
                    />
                </div>
            </div>
            )





    )
}

export default Proyecto

{/* <div className='flex flex-col items-center p-2'>
<h3 className='font-semibold'>{nombre}</h3>
<p className=' font-normal mt-2  '>Estos son algunos de mis proyectos</p>
</div> */}