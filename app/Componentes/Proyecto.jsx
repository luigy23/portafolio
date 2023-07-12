import Image from 'next/image'
import React from 'react'
import estilos from '@/app/Styles/Proyecto.module.css'
import Logo from '@/public/logoV.svg'

const Proyecto = ({ nombre, img, des, tec, link }) => {

    
    //nombre={proyecto.Nombre} des={proyecto.Descripcion} img={proyecto.img} tec={proyecto.Tecnologias}

    return (
          
            <a 
            href={link}
            target="_blank"
            
            className={estilos.proyecto}> 
                <div className={estilos.contenedorImg}>
                    <Image
                        src={(img ? img : Logo)}
                        alt={nombre}
                        width="400"
                        height="400"
                        sizes="100vw"
                        
                        placeholder='empty'
                        
                        className={estilos.imagen}
                    />
                </div>
                <div className={estilos.content}>
                    <h3 className='font-semibold text-xl'>{nombre}</h3>
                    <p className=' text-sm mt-1 text-slate-300 whitespace-pre-wrap'>{des}</p>
                    <div className='mt-4'>
                    {
                    tec &&
                    tec.map((tecnologia, index) => (
                        <span key={index} className='text-sm bg-fercho-300 px-2 py-1 rounded-lg mx-1 text-stone-950 '>{tecnologia}</span>
                    ))
                    }
                    </div>

                </div>

            </a>
     




    )
}

export default Proyecto

{/* <div className='flex flex-col items-center p-2'>
<h3 className='font-semibold'>{nombre}</h3>
<p className=' font-normal mt-2  '>Estos son algunos de mis proyectos</p>
</div> */}