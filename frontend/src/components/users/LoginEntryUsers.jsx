import React from 'react'
import "./LoginEntryUsers.css"

import { Link } from 'react-router-dom';

export default function LoginEntryUsers() {
    return (
        <div className='LoginEntryUsers_container'>
            <h4>Clientes registrados</h4>
            <p>Si tiene una cuenta, inicie sesión con su dirección de correo electrónico.</p>

            <form className='ContactFormSecPag'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleFormControlInput2" />
                </div>
                <div className="ContactFormSecPag_containerButton">
                    <button type="button" className="btn btn-dark LoginEntryUsers_button" ><Link to='/'>ENTRAR</Link> </button>
                    <div className='LoginEntryUsers_container_a'>
                        <Link to='/'>¿Olvidaste tu contraseña?</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
