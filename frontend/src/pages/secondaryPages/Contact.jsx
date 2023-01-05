import React from 'react'
import "./SecondPages.css"

import ContactFormSecPag from '../../components/secondaryPages/ContactFormSecPag'
import ContactDetailSecPag from '../../components/secondaryPages/ContactDetailSecPag'

export default function Contact() {
  return (
    <div className='SecondPage_container'>
      <section className='SecondPage_container_section1'>
        <article className='SecondPage_container_article1 SecondPage_container_article1_contact'>
          <ContactFormSecPag />
          <ContactDetailSecPag />
        </article >
      </section >
    </div >
  )
}
