import React from 'react'
import estilos from '../Styles/MenuNav.module.css'
import Link from 'next/link'
import Github from '../Icons/Github' 
import Linkedin from '../Icons/Linkedin'
const MenuNav = () => {
  return (
<nav className={estilos.nav}>
  <ul>
    <li>
      <Link href="#">Home</Link>
    </li>
    <li>
      <Link href="#proyectos">Proyectos</Link>
    </li>
    <li>
      <Link href="#">About</Link>
    </li>
    <li>
      <Link href="#">Contact</Link>
    </li>
  </ul>
  {/* abrir en otra pestaña */}
  <a href="https://github.com/luigy23" target="_blank" rel="noopener noreferrer">
  <Github className="w-7 fill-fercho-400 mr-2
  hover:fill-slate-50 transition-colors ease-in-out
  
  " />
  </a>
  <a href="https://www.linkedin.com/in/luigy/" target="_blank" rel="noopener noreferrer">
    <Linkedin className="w-8 text-fercho-400 
    hover:text-slate-50 transition-colors ease-in-out
    " />
  </a>
</nav>
  )
}

export default MenuNav