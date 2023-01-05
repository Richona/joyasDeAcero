import React from 'react'
import "./RegisterDataPrivate.css"

import { Link } from 'react-router-dom';

export default function RegisterDataSession() {
    return (
        <div className='LoginEntryUsers_container'>
            <h4 className='RegisterDataSession_h4'>INFORMACIÓN DE INICIO DE SESIÓN</h4>

            <div className='ContactFormSecPag RegisterDataSession_inputs'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleFormControlInput2" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">Confirmar contraseña</label>
                    <input type="password" className="form-control" id="exampleFormControlInput3" />
                </div>
                <div className="ContactFormSecPag_containerButton RegisterDataSession_button">
                    <button type="button" className="btn btn-dark LoginEntryUsers_button" ><Link to='/'>CREAR CUENTA</Link> </button>
                </div>
            </div>
        </div>
    )
}
