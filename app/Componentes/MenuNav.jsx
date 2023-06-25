import React from 'react'
import estilos from '../Styles/MenuNav.module.css'
const MenuNav = () => {
  return (
<nav className={estilos.nav}>
  <ul>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">About</a>
    </li>
    <li>
      <a href="#">Projects</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </ul>
</nav>
  )
}

export default MenuNav