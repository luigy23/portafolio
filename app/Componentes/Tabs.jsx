import Link from 'next/link'
import React from 'react'
import estilos from '@/app/Styles/Tabs.module.css'


const Tabs = () => {
    return (
        <ul className={estilos.links}>
            <li >
                <Link href="#" className={estilos.tab_active} >All</Link>
            </li>
            <li>
                <Link href="#" className={estilos.tab} >Wordpress</Link>
            </li>
            <li>
                <Link href="#" className={estilos.tab} >React</Link>
            </li>
        </ul>
    )
}

export default Tabs