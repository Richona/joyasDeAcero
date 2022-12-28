import React from 'react'
import "./Banner.css"

export default function Banner() {
  return (
    <article className='bannerHome_container'> 
      <div className='bannerHome_container_div'>
        <figure className='bannerHome_container_div_figure'> 
          <i class="fa-solid fa-dollar-sign"></i>
        </figure>
        <nav className='bannerHome_container_div_nav'>
          <a href="/">
            <h3>FORMAS DE PAGO</h3>
            <p>sitio 100% seguro</p>
          </a>
        </nav>
      </div>
    </article>
  )
}
