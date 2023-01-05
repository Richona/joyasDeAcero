import React from 'react'
import "./ContactFormDetailSecPag.css"

import TitleH2SecPag from '../../components/secondaryPages/TitleH2SecPag'

export default function ContactDetailSecPag() {
    return (
        <div className="ContactFormSecPag">
            <TitleH2SecPag title="Contacto Detalles" />
            <div className="ContactDetailSecPag_container">
                <div className="">
                    <i className="fa-solid fa-phone"></i>
                    <p>(014) 2156 5810</p>
                    <p>(014) 2156 5829</p>
                </div>
            </div>
            <div className="ContactDetailSecPag_container">
                <div className="">
                    <i className="fa-solid fa-mobile-screen-button"></i>
                    <p>29932343</p>
                </div>
            </div>
            <div className="ContactDetailSecPag_container">
                <div className="">
                    <i className="fa-solid fa-envelope"></i>
                    <p>mail@joyasdeacero.com.ar</p>

                </div>
            </div>

            <div className="ContactDetailSecPag_container">
                <div className="">
                    <i className="fa-brands fa-instagram"></i>
                    <p>@_cuevas1_</p>
                </div>
            </div>
        </div>
    )
}
