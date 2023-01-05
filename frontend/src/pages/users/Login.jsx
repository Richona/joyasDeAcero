import React from 'react'
import "./Users.css"

import TitleH2SecPag from '../../components/secondaryPages/TitleH2SecPag'
import LoginEntryUsers from '../../components/users/LoginEntryUsers'
import LoginNewUsers from '../../components/users/LoginNewUsers'

export default function Login() {
    return (
        <div className='Users_container'>
            <section className='Users_container_section1'>
                <TitleH2SecPag title="Acceso del cliente"/>
                <article className='Users_container_article1'>
                    <div className='Users_container_article1_container'>
                        <LoginEntryUsers />
                        <LoginNewUsers />
                    </div>
                </article>
            </section>
        </div>
    )
}
