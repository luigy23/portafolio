
import React from 'react'
import logo from '@/public/logoB.svg'
import Image from 'next/image'
import MenuNav from '../Componentes/MenuNav'
import { Whatsapp } from '../Icons/Whatsapp'

import Down_Arrow from '../Icons/Down_Arrow'
export default function LandingDisenoWeb() {
  return (
    <main className='w-full overflow-x-hidden relative'>

      <section className='w-full min-h-screen bg-smoke-800 flex flex-col items-center justify-center relative '>
      {/* div con dos columnas */}
        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-5'>
        <Image src={logo} width={120} height={120} className='rounded-lg mb-3 object-cover ' alt='Logo de Luigy dev' />
        <div className='contenido w-[80%] gap-3 py-6'>
         {/* div con los textos a la izquierda: */}
         <div className='flex flex-col items-start gap-3'>
          <h3 className='text-slate-50 font-bold uppercase text-5xl' >Creamos tu web</h3>
          <p className='text-slate-300 text-left text-xl'>
            haz trabajado duro en tu negocio, hay que mostrarlo al mundo con una web profesional.
          </p>
          </div>

        </div>
        
        

        </div>
        <a href="https://api.whatsapp.com/send?phone=573193896000&text=Hola%20%F0%9F%91%8B%20Estoy%20interesad@%20en%20el%20servicio%20de%20dise%C3%B1o%20web." target="_blank" className='btn-contact gap-2 flex items-center justify-center '><Whatsapp className='w-6' />Contactar Asesor</a>



        <div className='flex flex-col items-center gap-3 down'>
        <h3 className='text-slate-50 font-bold uppercase text-2xl ' >¿Por qué tener una web?</h3>
        <Down_Arrow   className="text-slate-50 w-10  " />
        </div>

        <span className='blob2 
        after:top-[24%]
   x

        before:top-[24%]

        z-0
        
        
        '></span>




      </section>


      <section className='w-full min-h-screen  bg-smoke-800 flex flex-col items-center  py-5'>


        <div className='flex w-[80%] justify-center flex-col items-center px-4'>
          

        </div>

      </section>


    </main>


  )
}

