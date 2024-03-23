import React from 'react'
import estilos from "@/app/Styles/DisenoWeb.module.css";
import { Whatsapp } from '@/app/Icons/Whatsapp';

const Header = () => {
  return (
    <section className={estilos.hero}>
    <div className=" w-10/12 md:w-full flex flex-col md:flex-row justify-center items-center   md:gap-5">
      <div className=" max-w-4xl  gap-3 py-6">
        <div className="flex flex-col items-center   gap-2">
          <h3 className={estilos.titulo}>Web's que Impulsan Negocios</h3>

          <div className="flex gap-4 items-center  ">

            <p className="  mt-6  text-slate-300  text-center  text-lg text-left md:text-xl">
              Desarrollamos Soluciones digitales a la medida de tu negocio.
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=573237118724&text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20desarrollo%20web"
            target="_blank"
            className="btn-contact w-56 gap-2 flex items-center justify-center "
          >
            <Whatsapp className="w-6 h-6" />
            Hablar por Whatsapp
          </a>
        </div>
      </div>
    </div>



    <span
      className="blob2 
  after:top-[24%]


  before:top-[24%]

  z-0
  
  
  "
    ></span>
  </section>
  )
}

export default Header