"use client"
import React from 'react'

// Componente ProyectoItem con transiciones mejoradas
const ProyectoItem = ({ active, proyecto, setActive, index, setInfoProyectoActivo  }) => {
  const handleClick = () => {
    setInfoProyectoActivo(
      {
     
        Descripcion: proyecto.Descripcion,
        Tecnologias: proyecto.Tecnologias,
        link: proyecto.link,
      }
    );
    setActive(index);
  };

  const { Nombre, img, Descripcion, Tecnologias, link } = proyecto;
  console.log(proyecto);
  

  // Clases base para todos los estados
  let baseClass = "border-2 border-slate-50 rounded-lg z-10 mx-4 flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out transform  ";
  // Aplicar clases dinámicas basadas en el estado activo
  const activeClass = active  ? "scale-110 opacity-100  min-w-[256px] h-40 bg-fercho-200" : "scale-100 opacity-75 min-w-[200px] h-32 bg-slate-900" ;
  //imagen de fondo:
  const bgImage= {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // Capa de color sobre la imagen
 
  }


  return (
    < >

    <div  onClick={handleClick} className={`  ${baseClass} ${activeClass} `} style={bgImage}>
      <div className='absolute w-full h-full bg-black bg-opacity-50 rounded-lg z-0 flex flex-col items-center justify-center'>
        <h3 className='font-semibold text-xl text-white'>{Nombre}</h3>
      
      </div>

    
     

    </div>

   
    </>
  );
};


export default ProyectoItem