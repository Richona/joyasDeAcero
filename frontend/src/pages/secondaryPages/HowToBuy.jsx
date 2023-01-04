import React from 'react'

import HomeSectionSecPag from '../../components/secondaryPages/HomeSectionSecPag'
import TitleH2SecPag from '../../components/secondaryPages/TitleH2SecPag';
import ParagraphSecPag from '../../components/secondaryPages/ParagraphSecPag';

export default function HowToBuy() {
  return (
    <div className='SecondPage_container'>
            <section className='SecondPage_container_section1'>
                <HomeSectionSecPag title="comó comprar" />
                
                <article className='SecondPage_container_article1'>
                    <TitleH2SecPag title="Para comprar por la web"/>
                    <br />
                    <ParagraphSecPag paragraph="Podes navegar libremente por el sitio sin tener la necesidad de estar logueado."/>
                    <ParagraphSecPag paragraph="Al momento de comprar vas a necesitar registrarte para iniciar sesión."/>
                    <ParagraphSecPag paragraph="Para registrarte por primera vez debes ir a " a="CREAR UNA CUENTA" link="/usuarios/registrarse"/>
                    <ParagraphSecPag paragraph="Necesitamos que completes todos los datos correctamente. Y finalices haciendo click en el botón inferior " b='“CREAR UNA CUENTA”'/>
                    <ParagraphSecPag paragraph="Para cargar productos al carrito de compras escogé el artículo de tu interés y las unidades que desees, haciendo click en " b="“AGREGAR AL CARRITO”." small="Si elegiste un anillo, no te olvides de indicar el talle."/>
                    <br />
                    <ParagraphSecPag paragraph="A partir de ese momento comienza a correr un tiempo de sesión para que cargues todos los productos al carrito y finalices la compra. El tiempo de sesión es de 6 horas. Es importante que estes atento al tiempo para que la sesión no caduque y evites perder la compra. "/>
                    <ParagraphSecPag paragraph="Durante el transcurso de tu compra podrás ir viendo la mercadería que elegiste clickeando  el ícono del carrito de compras, en la parte superior derecha de las páginas.  Tendrás la opción de ver los artículos agregados al carrito y modificar las cantidades o bien eliminar aquellos artículos que desees."/>
                    <ParagraphSecPag paragraph="Para finalizar la compra tenés que ir al ícono del carrito y seleccionar " b="“FINALIZAR PEDIDO”."/>
                    <ParagraphSecPag paragraph="Después elegí una de las opciones de pago. Completá los campos solicitados y pone " b="“actualizar” "/>
                    <ParagraphSecPag paragraph="Si tenés un cupón de descuento agregalo abajo donde dice " b="“aplicar código de descuento”" small="Si no tenés deja este campo libre."/>
                    <ParagraphSecPag paragraph="Por último poné " b="“REALIZAR PEDIDO”"/>
                    <ParagraphSecPag paragraph="Una vez que nos llega  el pedido, lo preparamos y entramos en contacto con vos dentro de las 48 hs hábiles vía mail."/>
                    <br />
                    <br />
                    <TitleH2SecPag title="Para comprar por el local"/>
                    <ParagraphSecPag paragraph="Podes acercate a nuestro local ubicado en Monolito dentro de nuestro horario de atención. No es necesario sacar turno. Te van a asesorar una de nuestras vendedoras capacitadas para orientarte e iniciarte como vendedor."/>
                    <ParagraphSecPag paragraph="Si hubiera mucha demora en el local o simplemente no querés esperar a ser atendido podés llevar anotados los códigos que hayas visto en la web que te gustaron y gestionar el pedido desde una de nuestras computadoras del autoservicio."/>
                    <ParagraphSecPag paragraph="Te esperamos!"/>
                </article>
            </section>
        </div>
  )
}
