import React from "react";
import estadistica from "@/public/assets/estadistica.svg";
import Image from "next/image";
import Laptop from "./Lotties/Laptop";

import { Whatsapp } from "./Icons/Whatsapp";
import estilos from "@/app/Styles/DisenoWeb.module.css";
import Down_Arrow from "./Icons/Down_Arrow";
import Soporte from "./Lotties/Soporte";
import Detalles from "./Lotties/Detalles";
import Contact from "./Secciones/Contact";
import Proyectos from "./Secciones/Proyectos";
import FloatingButton from "./Componentes/FloatingButton";
import MenuNav from "./Componentes/MenuNav";
import GaleriaProyectos from "./Secciones/Inicio/GaleriaProyectos";
import Header from "./Secciones/Inicio/Header";
import SliderProyectos from "./Secciones/Inicio/Componentes/SliderProyectos";
import Blob from "./Componentes/Blobs/Blob";
import Arrows from "./Componentes/Blobs/Arrows";

export default function LandingDisenoWeb() {
  return (
    <>
      <main className="w-full justify-center flex flex-col items-center bg-darka overflow-x-hidden relative">
        <Header />
       
      
        <SliderProyectos />
        <Blob className={`after:top-[6%]   after:blur-[230px] after:md:w-96 after:md:h-96 after:-left-72 after:opacity-70
         before:top-[6%] before:blur-[230px] before:md:w-96 before:md:h-96 before:-right-72 before:opacity-80 `} />

        <Arrows className="rotate-180 w-40" />
        <div className="w-full justify-center flex flex-col items-center relative p-10 ">
     
     
        </div>
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
