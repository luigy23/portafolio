import React from 'react'
import Image from 'next/image'
import yo from '@/public/yo.png'
import WordpressIcon from '../Icons/Wordpress'
import { ReactIcon } from '../Icons/React'
import { Nexticon } from '../Icons/Next'
import { NodeIcon } from '../Icons/NodeIcon'
const About = () => {
    return (
        <section className='w-full min-h-screen bg-smoke-800 blanco  flex flex-col items-center justify-start p-5'>
            {/* div para el contenido con su ancho correspondiente: */}
            <div className='w-full md:w-2/3 lg:w-w-2/3  xl:w-w-2/3 text-center'>
                <h1 className='text-slate-100 font-bold uppercase '>Sobre mi</h1>
                <div className='w-20 h-1 bg-fercho-400 mx-auto mt-2 mb-5'></div>

                <p className='text-slate-300 font-light mt-2 md:text-base text-sm '>Soy un desarrollador web full-stack, con gusto por el diseño UX UI.
                    Empecé con el desarrollo web en 2020, y desde entonces he estado aprendiendo y practicando constantemente, para mejorar mis habilidades y conocimientos.
                </p>
            </div>
            <div className='w-full md:flex justify-center'>
                <div className='w-1/3 p-2 mx-auto mt-2 mb-5 flex flex-col items-center '>
                    <h3 className='text-slate-100 font-bold uppercase mt-2 '>Habilidades</h3>
                    <ul className='text-slate-300 font-light mt-2 md:text-xl text-sm overflow-visible w-full flex flex-col gap-3'>
                        <li >
                            <span className='flex items-center'><WordpressIcon className='w-5 mr-2 fill-white' />
                            <span>Wordpress</span>
                            </span>
                        </li>
                        <li >
                            <span className='flex items-center'>
                            <ReactIcon className='w-5 mr-2 fill-scooter-500' />
                            <span>React Js</span>
                            </span>
                        </li>
                        <li >
                            <span className='flex items-center'>
                                <Nexticon className='w-5 mr-2 fill-white' />
                            <span>Next Js</span>
                            </span>
                        </li>
                        <li >
                            <span className='flex items-center'>
                            <NodeIcon className='w-5 mr-2 fill-white' />
                            <span>Node Js</span>
                            </span>
                        </li>
                    </ul>

                </div>
                <Image src={yo} width={300} height={300} className='rounded-lg mb-3 object-cover' alt='Logo de Luigy dev' />
                <div className='w-1/3 h-1 bg-fercho-400 mx-auto mt-2 mb-5'></div>
            </div>



        </section>
    )
}

export default About