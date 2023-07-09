import Link from 'next/link'
import React from 'react'
import estilos from '@/app/Styles/Tabs.module.css'


const Tabs = ({filtrar}) => {

    const handleClick = (e) => {
        e.preventDefault()
        filtrar(e.target.textContent)

        const tabs = document.querySelectorAll(`.${estilos.tab}`)
        tabs.forEach(tab => tab.classList.remove(estilos.tab_active))
        e.target.classList.add(estilos.tab_active)
    }
    

    return (
        <ul className={estilos.links}>
            <li onClick={handleClick}
            >
                <Link href="#" className={estilos.tab} >All</Link>
            </li>
            <li onClick={handleClick}>
                <Link href="#" className={estilos.tab} >Wordpress</Link>
            </li>
            <li onClick={handleClick}>
                <Link href="#" className={estilos.tab} >React</Link>
            </li>
        </ul>
    )
}

export default Tabs