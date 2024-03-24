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
  let baseClass = "border-2 border-slate-50 rounded-lg z-10 mx-4 flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out transform h-40  ";
  // Aplicar clases dinámicas basadas en el estado activo

  const bgImage= {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // Capa de color sobre la imagen

    //hacer que haga zoom al hacer hover
    //transform: 'scale(1.1)',
    //transition: 'transform 0.5s',
    //filter: 'brightness(50%)',
 
  }


  return (
    < >

    
      <div   style={bgImage} className=' border-2 border-slate-50 w-full h-full cursor-pointer rounded-lg flex flex-col items-center justify-center'>
      <h3 className='font-semibold text-xl text-white z-10'>{Nombre}</h3>
        <span className='absolute w-full h-full  bg-black bg-opacity-50 rounded-lg z-0'></span>

        
      
      </div>

    
     



   
    </>
  );
};


export default ProyectoItem