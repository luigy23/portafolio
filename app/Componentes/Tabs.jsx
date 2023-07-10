import Link from 'next/link'
import React from 'react'
import estilos from '@/app/Styles/Tabs.module.css'


const Tabs = ({filtrar}) => {

    const handleClick = (e) => {
        e.preventDefault()
        filtrar(e.target.textContent)
        //los tabs son los li de la lista con la clase links
        const tabs = document.querySelectorAll(`.${estilos.links} li`)
        tabs.forEach(tab => tab.classList.remove(estilos.tab_active))
        e.target.classList.add(estilos.tab_active)
    }
    

    return (
        <ul className={estilos.links}>
            <li onClick={handleClick} 
            >
                All
            </li>
            <li onClick={handleClick}>
               Wordpress
            </li>
            <li onClick={handleClick}>
                React
            </li>
        </ul>
    )
}

export default Tabs