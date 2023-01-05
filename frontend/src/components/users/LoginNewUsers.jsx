import React from 'react'
import "./LoginEntryUsers.css"

import { Link } from 'react-router-dom';

export default function LoginNewUsers() {
    return (
        <div className='LoginEntryUsers_container'>
            <h4>Nuevos Clientes</h4>
            <p>Crear una cuenta tiene muchos beneficios: Paga más rápido, puede guardar más de una dirección, seguimiento de pedidos y mucho más.</p>

            <div className="ContactFormSecPag_containerButton">
                <button type="button" className="btn btn-dark LoginNewUsers_button"><Link to="/usuarios/registrarse">CREAR UNA CUENTA</Link></button>
            </div>
        </div>
    )
}
