import React from 'react'
import Image from 'next/image'
import yo from '@/public/yo.png'
import WordpressIcon, { Wordpress } from '../Icons/Wordpress'
import { ReactIcon } from '../Icons/React'
import { Nexticon } from '../Icons/Next'
import { NodeIcon } from '../Icons/NodeIcon'
import { Colombia } from '../Icons/Colombia'
import { Figma } from '../Icons/Figma'
import { Illustrator } from '../Icons/Illustrator'
import Webicon from '../Icons/Webicon'
const About = () => {
    return (
        <section className='w-full min-h-screen bg-smoke-800 blanco  flex flex-col items-center justify-start p-5'>
            {/* div para el contenido con su ancho correspondiente: */}
            <div className='w-full md:w-2/3 lg:w-w-2/3  xl:w-w-2/3 text-center'>
                <h1 className='text-slate-100 font-bold uppercase '>Sobre mí</h1>
                <div className='w-20 h-1 bg-fercho-400 mx-auto mt-2 mb-5'></div>

                <p className='text-slate-300 font-light mt-2 md:text-base text-sm '>Soy un desarrollador web full-stack, con gusto por el diseño UX UI.
                    Empecé con el desarrollo web en 2020 y, desde entonces, he estado aprendiendo y practicando constantemente para mejorar mis habilidades y conocimientos.
                </p>
            </div>

            <div className='w-full flex flex-col md:flex-row justify-center '>
                {/* Lista de Hablidades */}
                <div className='w-full md:w-1/3 p-2 mx-auto mt-2 mb-5 flex flex-col items-center  '>
                
                    <ul className='text-slate-300 font-light mt-2 md:text-xl text-sm overflow-visible w-36 flex flex-col gap-3 md:items-start '>
                    <h3 className='text-slate-100 font-bold uppercase mt-2 md:text-xl'>Habilidades</h3>
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
                        <li >
                            <span className='flex items-center'><Wordpress className='w-5 mr-2 fill-white' />
                                <span>Wordpress</span>
                            </span>
                        </li>

                        <li >
                            <span className='flex items-center'>
                                <Webicon className='w-5 mr-2 fill-white' />
                                <span className='text-base'>HTML, CSS, JavaScript</span>
                            </span>
                        </li>

                        <h3 className='text-slate-100 font-bold uppercase mt-2 '>Herramientas</h3>
                        <li >
                            <span className='flex items-center'>
                                <Figma className='w-5 mr-2 ' />
                                <span>Figma</span>
                            </span>
                        </li>
                        <li >
                            <span className='flex items-center'>
                                <Illustrator className='w-5 mr-2 fill-white' />
                                <span>Illustrator</span>
                            </span>
                        </li>



                    </ul>

                </div>
       
                {/* Foto MIA */}
                <div className='flex flex-col items-center relative  md:order-none order-last'>
                    <Image src={yo} width={300} height={300} className='rounded-lg mb-3 object-cover' alt='Logo de Luigy dev' />
                    <span className='w-full  -mt-10'><Colombia className='w-8'
                    /></span>
                </div>
                <div className='w-full md:w-1/3 p-2 mx-auto mt-2 mb-5 flex flex-col md:items-start items-center '>
                    <h3 className='text-slate-100 font-bold uppercase mt-2 md:text-xl'>Estudios</h3>
                    <ul className='text-slate-300 font-light mt-2 md:text-base text-sm overflow-visible w-full flex flex-col gap-3 md:items-start items-center text-center'>
                        <li className='bg-smoke-900 px-2 py-1 rounded-lg w-[85%]'>
                            <span className='text-fercho-300 '>Técnico en diseño y programación de software <br /></span>
                            Instituto Técnico Superior Neiva | 2019-2020
                        </li>
                        <li className='bg-smoke-900 px-2 py-1 rounded-lg w-[85%]'>
                            <span className='text-fercho-300 '>Ingeniería de software <br /></span>
                            Universidad Surcolombiana | 2021 - Actualidad
                        </li>
                        <li className='bg-smoke-900 px-2 py-1 rounded-lg w-[85%]'>
                            <span className='text-fercho-300 '>Autodidacta en desarrollo web <br /></span>
                            2019 - Actualidad
                        </li>



                    </ul>

                </div>
 



            </div>

     

        </section>
    )
}

export default About