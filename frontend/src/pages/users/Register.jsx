import React from 'react'
import "./Users.css"

import TitleH2SecPag from '../../components/secondaryPages/TitleH2SecPag'
import RegisterDataPrivate from '../../components/users/RegisterDataPrivate'
import RegisterDataSession from '../../components/users/RegisterDataSession'

export default function Register() {
  return (
    <div className='Users_container'>
      <section className='Users_container_section1'>
        <TitleH2SecPag title="Acceso del cliente" />
        <article className='Users_container_article1'>
          <form className='Users_container_article1_container'>
            <RegisterDataPrivate />
            <RegisterDataSession />
          </form>
        </article>
      </section>
    </div>
  )
}
