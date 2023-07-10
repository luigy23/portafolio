"use client"

import Image from 'next/image'
import Left_Arrow from './Icons/Left_Arrow'
import Down_Arrow from './Icons/Down_Arrow'
import MenuNav from './Componentes/MenuNav'
import Proyectos from './Secciones/Proyectos'
import logo from '@/public/logoV.svg'


export default function Home() {
  return (
    <main className='w-full overflow-x-hidden relative'>
    <MenuNav />
    
    <section className='w-full min-h-screen bg-smoke-800 flex flex-col items-center justify-center relative overflow-x-hidden'>
      

      <Image src={logo} width={120} height={120} className='rounded-lg mb-3 object-cover'  />

      <h1 className='text-slate-50 font-bold uppercase '>Luigy <span className='text-fercho-400'>Leonardo</span> </h1>
      <h2 className='text-slate-50 font-medium mt-2  '>Desarrollador Web | Full-Stack</h2>
      <button className='btn-contact'>Contactame <Left_Arrow /></button>
      <Down_Arrow className="text-slate-50 w-10  down" />


    </section>

    <section className='w-full pt-4 min-h-screen relative  bg-smoke-800 flex flex-col items-center justify-center'>
      
      <Proyectos />
      <span className='blob2 '></span>
    </section>
    <section className='w-full h-screen   flex flex-col items-center justify-center'>
      <h1 className='text-slate-50 font-bold uppercase '>Sobre mi</h1>
    </section>
    <span className='blob '></span>
    
    
    </main>
  )
}

// text transformation types in tailwind:
// capitalize
// lowercase
// uppercase