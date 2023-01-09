import React from 'react'
import "./SecondPages.css"

import HomeSectionSecPag from '../../components/secondaryPages/HomeSectionSecPag';
import TitleH2SecPag from '../../components/secondaryPages/TitleH2SecPag';
import ParagraphSecPag from '../../components/secondaryPages/ParagraphSecPag';

export default function ExchangePolicies() {
    return (
        <div className='SecondPage_container'>
            <section className='SecondPage_container_section1'>
                <HomeSectionSecPag title="Políticas de Cambio" />
                <article className='SecondPage_container_article1'>
                    <TitleH2SecPag title="Políticas de Cambio" />
                    <ParagraphSecPag paragraph="No hacemos cambio. Solamente cambiamos talles de anillos en el local si hay stock del mismo modelo."/>
                    <br/>
                    <ParagraphSecPag paragraph="La empresa solo se hará responsable de fallas de fábrica. Es decir que el cliente debe informar que recibió un producto fallado en el lapso de 48hs de recibida la mercadería a " b="reclamos@joyasdeacero.com.ar "/>
                    <ParagraphSecPag paragraph="Se podrá hacer una nota de crédito por el valor de venta del producto al momento de la compra. Pasadas las 48hs la empresa no se hará responsable de fallas relacionadas al uso del producto. "/>
                    <br />
                    <ParagraphSecPag paragraph="Si necesitas tramitar un reclamo ponete en contacto con nosotros para que podamos explicarte como realizarlo. Debes enviarnos un mail a reclamos@joyasdeacero.com.ar e indicarnos:"/>
                    <ParagraphSecPag small="*Foto del producto donde se aprecie el defecto"/>
                    <ParagraphSecPag small="*Qué producto tiene inconvenientes. Indicar código."/>
                    <ParagraphSecPag small="*Los siguientes datos: Nombre completo, mail con el que realizaste el pedido y  número de pedido."/>
                    <ParagraphSecPag paragraph="Una vez que nos hayas enviado el mail te explicaremos como tramitar todo y lo que hay que hacer exactamente, no te preocupes, ¡Es facilísimo!"/>
                </article>
            </section>
        </div>
    )
}
