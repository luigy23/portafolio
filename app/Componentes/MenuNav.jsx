import React from 'react'
import estilos from '../Styles/MenuNav.module.css'
import Link from 'next/link'
import Github from '../Icons/Github' 
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
  <Github className="w-7 fill-fercho-400" />
  </a>
</nav>
  )
}

export default MenuNav