import React from "react";
import estadistica from "@/public/assets/estadistica.svg";
import Image from "next/image";
import Laptop from "../Lotties/Laptop";

import { Whatsapp } from "../Icons/Whatsapp";
import estilos from "@/app/Styles/DisenoWeb.module.css";
import Down_Arrow from "../Icons/Down_Arrow";
import Soporte from "../Lotties/Soporte";
import Detalles from "../Lotties/Detalles";
import Contact from "../Secciones/Contact";
import Proyectos from "../Secciones/Proyectos";
import FloatingButton from "../Componentes/FloatingButton";
import MenuNav from "../Componentes/MenuNav";

export default function LandingDisenoWeb() {
  return (
    <>
      <main className="w-full overflow-x-hidden relative">
        <section className={estilos.hero}>
          <div className=" w-10/12 md:w-full flex flex-col md:flex-row justify-center items-center   md:gap-5">
            <div className=" max-w-4xl  gap-3 py-6">
              <div className="flex flex-col items-center   gap-2">
                <h3 className={estilos.titulo}>Web's que Impulsan Negocios</h3>

                <div className="flex gap-4 items-center  ">

                  <p className="  mt-6  text-slate-300  text-center  text-lg text-left md:text-xl">
                    Ofrecemos soluciones de desarrollo web para empresas, que buscan
                    mejorar su presencia en línea y aumentar sus ventas.
                  </p>
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=573237118724&text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20desarrollo%20web"
                  target="_blank"
                  className="btn-contact w-56 gap-2 flex items-center justify-center "
                >
                  <Whatsapp className="w-6" />
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
        <section className="w-full bg-smoke-800 flex flex-col items-center py-5 ">
          <div className="w-full flex flex-col md:flex-row justify-center items-center  ">
            <div className="flex flex-col items-center w-full   py-6">
              {/* div con los textos a la izquierda: */}

              <h3 className="text-slate-50 font-bold uppercase text-2xl">
                ¿Qué te ofrecemos?
              </h3>

              {/* div horizontal: */}
              <div className="flex flex-col md:flex-row gap-5 p-2 items-center justify-center w-full ">
                <div className={estilos.objetivo}>
                  <Laptop className=" w-20" />
                  <h4>Web moderna y atractiva</h4>
                  <p>para representar de la mejor manera a tu marca.</p>
                </div>
                <div className={estilos.objetivo}>
                  <Soporte className=" w-20" />
                  <h4>Atención Personalizada</h4>
                  <p>Resolveremos sus dudas, y atenderemos sus sugerencias.</p>
                </div>

                <div className={estilos.objetivo}>
                  <Detalles className=" w-28" />
                  <h4>Calidad Precio</h4>
                  <p>
                    Prestamos atención al detalle, y crearemos un producto de
                    calidad para su marca.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full   bg-smoke-800 flex flex-col items-center relative  py-5">
          {/* Ventajas */}
          <div className=" w-[80%] md:w-[60%] text-center gap-3 flex flex-col z-10">
            <p className={estilos.ventaja}>
              Permite conectar de manera directa y efectiva con nuestros
              clientes y potenciales clientes.
            </p>
            <p className={estilos.ventaja}>
              Tienes la posibilidad de generar ventas y oportunidades de negocio
              las 24 horas del día.
            </p>
            <p className={estilos.ventaja}>
              Aumentas tu visibilidad y presencia en línea, lo que puede
              resultar en más exposición y nuevas oportunidades.
            </p>
          </div>
          <span
            className="blob2 after:top-[15%] before:top-[15%]
                after:left-[10%] after:blur-0 z-0 
                before:right-[10%] before:blur-0 
                
        
        "
          ></span>
        </section>

        <Proyectos />
        <Contact />
      </main>
    </>
  );
}
