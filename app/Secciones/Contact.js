import React from 'react'
import FormContact from '../Componentes/FormContact'
import Linkedin from '../Icons/Linkedin'
import Link from 'next/link'
import { Whatsapp } from '../Icons/Whatsapp'

const Contact = () => {
  return (
<section 
id='contacto'
className='w-full min-h-screen bg-smoke-800 relative blanco  flex flex-col items-center justify-start p-5'>

<h2  className='text-slate-100 font-bold uppercase '>Contacto</h2>
<h3 className='text-slate-100 font-bold uppercase mt-2 mb-2 '>¿Tienes un proyecto en mente?</h3>
<FormContact className="z-10"
/>
{/* div para dos botones: */}
<div className='w-full flex flex-col md:flex-row justify-center gap-3 '>
<a 
href='https://www.linkedin.com/in/luigy/'
target='_blank'



className=' bg-smoke-900 text-slate-50
 p-2 rounded-xl gap-1 flex mt-5 
 justify-center items-center
 text-sm font-semibold 
 hover:bg-fercho-300 hover:text-slate-900
transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110
active:bg-fercho-400 active:text-slate-900
 
 '>

<Linkedin className='w-5 ' /> Ir a Linkedin 

</a>
<a 
href='https://api.whatsapp.com/send?phone=573193896000&text=Hola%20%F0%9F%91%8B%20Estoy%20interesad@%20en%20el%20servicio%20de%20dise%C3%B1o%20web.'
target='_blank'



className=' bg-smoke-900 text-slate-50
 p-2 rounded-xl gap-1 flex mt-5 
 justify-center items-center
 text-sm font-semibold 
 hover:bg-fercho-300 hover:text-slate-900
transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110
active:bg-fercho-400 active:text-slate-900
 
 '>

<Whatsapp className='w-5 ' /> Ir a Whatsapp

</a>
</div>

<span className='blob2 after:top-[30%] after:left-[90%] before:top-[50%] before:right-[90%] z-0


'></span>


</section>

  )
}

export default Contact