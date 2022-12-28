import React from 'react'
import "./Carousel.css"
import Carousel from 'react-bootstrap/Carousel';

export default function Carousels() {
  return (
    <div className='carouselHome_container'>
      <Carousel fade={true} indicators={false} nextLabel={""} prevLabel={""}>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://gratia-production.b-cdn.net/pub/media/wysiwyg/27_12_BANNER_ANILLO_DE_PLATA.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://gratia-production.b-cdn.net/pub/media/wysiwyg/27_12_BANNER_PROTECCION_ACERO.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://gratia-production.b-cdn.net/pub/media/wysiwyg/27_12_BANNER_AROS_CUBANOS_PLATA.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://gratia-production.b-cdn.net/pub/media/wysiwyg/27_12_BANNER_CADENA_ACERO_BLANCO.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
