import Image from 'next/image'
import React from 'react'
import estilos from '@/app/Styles/Proyecto.module.css'

const Proyecto = ({ nombre, img, des, tec }) => {
    return (

<div className={estilos.proyecto}>
                <div className={estilos.contenedorImg}>
                    <Image
                        src={img}
                        alt={nombre}
                        width="400"
                        height="400"
                        sizes="100vw"
                        
                        className={estilos.imagen}
                    />
                </div>
                <div className={estilos.content}>
                    <h3 className='font-semibold text-xl'>{nombre}</h3>
                    <p className=' text-sm mt-1 text-slate-300 whitespace-pre-wrap'>{des}</p>
                    {tec.map((tecnologia) => (
                        <span className='text-sm bg-fercho-300 px-2 py-1 rounded-lg text-stone-950 mt-4'>{tecnologia}</span>
                    ))
                    }

                </div>

            </div>





    )
}

export default Proyecto

{/* <div className='flex flex-col items-center p-2'>
<h3 className='font-semibold'>{nombre}</h3>
<p className=' font-normal mt-2  '>Estos son algunos de mis proyectos</p>
</div> */}