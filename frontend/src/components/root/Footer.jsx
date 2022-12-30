import React from 'react'
import "./Footer.css"

import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer_container">
      <section className='footer_top'>

      </section>
      <section className='footer_middle'>
        <div className='footer_middle_container'>
          <article className='footer_middle_article1'>
            <div className='footer_middle_article1_containerTitle'>
              <strong>INFORMACIÓN</strong>
            </div>
            <ul>
              <li>
                <span><b className="footer_middle_article1_b">Dirección</b> <br /> Monolito, Neuquén, Argentina</span>
              </li>
              <li>
                <span><b className="footer_middle_article1_b">Teléfono</b> <br /> 2994932923</span>
              </li>
            </ul>
          </article>
          <article className='footer_middle_article2'>
            <nav className='footer_middle_article2_nav'>
              <div>
                <div className='footer_middle_article1_containerTitle'>
                  <strong>NOSOTROS</strong>
                </div>
                <div className='footer_middle_article1_containerUls'>
                  <ul className='footer_middle_article2_ul'>
                    <li><Link to="/sobre-joyas-de-acero">Sobre Joyas de Acero</Link></li>
                    <li><Link to="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/proveedores">Ser nuestro proveedor</Link></li>
                  </ul>
                  <ul className='footer_middle_article2_ul'>
                    <li><Link to="/politicas-de-cambio">Políticas de cambio</Link></li>
                    <li><Link to="/cuidado-de-las-joyas">Cuidado de las Joyas</Link></li>
                    <li><Link to="/talles">Guía de Talles</Link></li>
                    <li><Link to="/ser-parte-de-nuestro-staff">Ser parte de nuestro Staff</Link></li>
                  </ul>
                </div>
              </div>
              <div className='footer_middle_article2_containerIMG'>
                <img src="https://gratia-production.b-cdn.net/pub/media/wysiwyg/medios_de_pago.jpg" title="Mercado Pago - Medios de pago" alt="Mercado Pago - Medios de pago" width="468" height="60" />
                <div className='footer_middle_article2_containerCierre'> </div>
              </div>
            </nav>
            <div className='footer_middle_article2_containerCopy'>
              <div className='footer_middle_article2_containerCopy_div'>
                <span>Joyas de Acero © Todos los derechos reservados. </span><br />
                <span>HORARIOS DE ATENCIÓN <br /><b>Lunes A Viernes: 9.00-17.30<br /></b></span>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className='footer_botton'>
        <a href="#wrapper">
          <div className='footer_botton_containerArrowUp'>
            <i className="fa-solid fa-caret-up"></i>
          </div>
        </a>
      </section>
    </footer>
  )
}
