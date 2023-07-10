import React from 'react'
import estilos from '../Styles/MenuNav.module.css'
import Link from 'next/link'
const MenuNav = () => {
  return (
<nav className={estilos.nav}>
  <ul>
    <li>
      <Link href="#">Home</Link>
    </li>
    <li>
      <Link href="#">About</Link>
    </li>
    <li>
      <Link href="#proyectos">Projects</Link>
    </li>
    <li>
      <Link href="#">Contact</Link>
    </li>
  </ul>
</nav>
  )
}

export default MenuNav