import Image from 'next/image'
import Left_Arrow from './Icons/Left_Arrow'
import Down_Arrow from './Icons/Down_Arrow'
import MenuNav from './Componentes/MenuNav'
import Proyectos from './Secciones/Proyectos'


export default function Home() {
  return (
    <>
    <MenuNav />
    <main className='w-full h-screen bg-smoke-800 flex flex-col items-center justify-center'>
      <h1 className='text-slate-50 font-bold uppercase '>Luigy <span className='text-fercho-400'>Leonardo</span> </h1>
      <h2 className='text-slate-50 font-medium mt-2  '>Desarrollador Web | Full-Stack</h2>
      <button className='btn-contact'>Contactame <Left_Arrow /></button>
      <Down_Arrow className="text-slate-50 w-10  down" />


    </main>
    <section className='w-full pt-4 min-h-screen  bg-smoke-800 flex flex-col items-center justify-center'>
      
      <Proyectos />
    </section>
    <section className='w-full h-screen   flex flex-col items-center justify-center'>
      <h1 className='text-slate-50 font-bold uppercase '>Sobre mi</h1>
    </section>
  
    
    
    </>
  )
}

// text transformation types in tailwind:
// capitalize
// lowercase
// uppercase