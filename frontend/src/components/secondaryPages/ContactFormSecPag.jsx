import React from 'react'
import "./ContactFormDetailSecPag.css"

import TitleH2SecPag from '../../components/secondaryPages/TitleH2SecPag'

export default function ContactFormSecPag() {
    return (
        <form className='ContactFormSecPag'>
            <TitleH2SecPag title="Escríbenos" />
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Número de teléfono</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Dejá tus comentarios</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="ContactFormSecPag_containerButton">
                <button type="button" className="btn btn-dark ">ENVIAR</button>
            </div>
        </form>
    )
}
