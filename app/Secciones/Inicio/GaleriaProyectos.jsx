"use client";
import React, { useEffect, useRef, useState } from "react";
import ProyectoItem from "./Componentes/ProyectoItem";
import { getProyectos } from "@/app/Utils/supabase";
import Link from "next/link";

function smoothScrollBy(element, distance) {
  element.scrollTo({
    left: element.scrollLeft + distance,
    behavior: "smooth",
  });
}

const GaleriaProyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    getProyectos().then((data) => {
      setProyectos(data);
      setCargandoProyectos(false);
    });
  }, []);

  const [ProyectoActivo, setProyectoActivo] = useState(1);
  const [cargandoProyectos, setCargandoProyectos] = useState(true);
  const [InfoProyectoActivo, setInfoProyectoActivo] = useState(proyectos[1]);

  const Slider = useRef(null);

  const slide3 = (index) => {
    //deslizamos si el elemento activo es el tercero en el slider (en el slider se muestran 3 elementos)

    //posicion inicial
    if (ProyectoActivo === 1) {
      if (index === 2) {
        smoothScrollBy(Slider.current, 232);
      }
    }

    if (ProyectoActivo > 1 && ProyectoActivo < proyectos.length - 1) {
      if (index === ProyectoActivo + 1) {
        smoothScrollBy(Slider.current, 232);
      }
      if (index === ProyectoActivo - 1) {
        smoothScrollBy(Slider.current, -232);
      }
    }
  };

  const handleClickProyecto = (index) => {
    setProyectoActivo(index);
    slide3(index);
  };

  const onNextClick = (e) => {
    e.preventDefault();
    smoothScrollBy(Slider.current, 232);
  };
  const onPrevClick = (e) => {
    e.preventDefault();
    smoothScrollBy(Slider.current, -232);
  };

  return (
    <section className="w-full bg-darka flex flex-col items-center py-5 ">
      <div className="w-full flex flex-col md:flex-row justify-center items-center  ">
        <div className="flex flex-col items-center w-full   py-6">
          <h3 className="text-slate-50 font-bold uppercase text-2xl mb-3">
            Galeria de Proyectos
          </h3>

          <div className="w-11/12 md:w-1/2 relative gap-2 flex justify-center items-center">
            <div
              ref={Slider}
              className="flex overflow-x-scroll md:overflow-hidden w-full md:w-auto items-center py-4   "
            >
              {cargandoProyectos ? (
                <p className="text-slate-50 font-normal mt-2">
                  Cargando proyectos...
                </p>
              ) : (
                proyectos.map((proyecto, index) => (
                  <ProyectoItem
                  
                    active={ProyectoActivo === index}
                    setActive={handleClickProyecto}
                    setInfoProyectoActivo={setInfoProyectoActivo}

                    key={index}
                    index={index}
                    proyecto={proyecto}
                  />
                ))
              )}
            </div>
            <button
              onClick={onPrevClick}
              className="bg-fercho-300 z-20 text-white px-4 py-2 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"
            >
              {"<"}
            </button>
            <button
              onClick={onNextClick}
              className="bg-fercho-300 z-20 text-white px-4 py-2 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"
            >
              {">"}
            </button>
          </div>
          <div className="w-11/12 gap-1 md:w-2/5 flex flex-col items-center justify-center p-2">
            {
            InfoProyectoActivo ?

              <>
            <p className="text-slate-50 font-normal">
              {InfoProyectoActivo.Descripcion}

            </p>
            {
            InfoProyectoActivo.link &&
            <Link className="pr-1 text-fercho-300 font-semibold hover:text-fercho-100 transition-colors ease-in-out cursor-pointer"
             href={InfoProyectoActivo.link}>
            Ir al Proyecto
            </Link>
            }

            </>

            : <p className="text-slate-50 font-normal">Clic en el proyecto para ver más detalles</p>


            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaleriaProyectos;

{
  /* <div className="w-11/12 md:w-1/2 relative gap-2 flex justify-center items-center">
<div
  ref={Slider}
  className="flex   overflow-x-hidden items-center py-4   "
>
  {cargandoProyectos ? (
    <p className="text-slate-50 font-normal mt-2">
      Cargando proyectos...
    </p>
  ) : (
    proyectos.map((proyecto, index) => (
      <ProyectoItem
        active={ProyectoActivo === index}
        setActive={handleClickProyecto}
        setInfoProyectoActivo={setInfoProyectoActivo}
        key={index}
        index={index}
        proyecto={proyecto}
      />
    ))
  )}
</div>
<button
  onClick={onPrevClick}
  className="bg-fercho-300 z-20 text-white px-4 py-2 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"
>
  {"<"}
</button>
<button
  onClick={onNextClick}
  className="bg-fercho-300 z-20 text-white px-4 py-2 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"
>
  {">"}
</button>
</div> */
}
