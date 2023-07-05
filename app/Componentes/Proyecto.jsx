import Image from 'next/image'
import React from 'react'


const Proyecto = ({ nombre, img, des }) => {
    return (
        <div className=' bg-smoke-900 text-slate-50  rounded-md w-64 items-center overflow-hidden gap-2'>
            <div className='  items-center flex  flex-col h-40 overflow-hidden'>
                <Image
                    src={img}
                    alt={nombre}
                    width={300}
                />
            </div>
            <div className='flex flex-col items-center px-2 pb-4 pt-2 text-center'>
                <h3 className='font-semibold'>{nombre}</h3>
                <p className=' text-sm mt-1 text-slate-300 '>{des}</p>
            </div>

        </div>
    )
}

export default Proyecto

{/* <div className='flex flex-col items-center p-2'>
<h3 className='font-semibold'>{nombre}</h3>
<p className=' font-normal mt-2  '>Estos son algunos de mis proyectos</p>
</div> */}