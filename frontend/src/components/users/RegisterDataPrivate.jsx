import React from 'react'
import "./RegisterDataPrivate.css"

export default function RegisterDataPrivate() {
  return (
    <div className='LoginEntryUsers_container'>
            <h4 className='RegisterDataSession_h4'>INFORMACIÓN PERSONAL</h4>

            <div className='ContactFormSecPag RegisterDataSession_inputs'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="exampleFormControlInput2" />
                </div>
            </div>
        </div>
  )
}
