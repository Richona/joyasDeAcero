import React from 'react'
import "./SecondPages.css"

import HomeSectionSecPag from '../../components/secondaryPages/HomeSectionSecPag';
import TitleH2SecPag from '../../components/secondaryPages/TitleH2SecPag';
import ParagraphSecPag from '../../components/secondaryPages/ParagraphSecPag';

export default function BeOurSupplier() {
    return (
        <div className='SecondPage_container'>
            <section className='SecondPage_container_section1'>
                <HomeSectionSecPag title="Proveedores" />
                <article className='SecondPage_container_article1'>
                    <TitleH2SecPag title="Para ser nuestro Proveedor" />
                    <br />
                    <ParagraphSecPag paragraph="Ya seas fabricante o importador podes contactarte con nosotros para que seas nuestro proveedor!."/>
                    <ParagraphSecPag paragraph="Sólo tenes que escribirnos a proveedores@joyasdeacero.com.ar contandonos un poco de tu producto, podes enviarnos catalogo o fotos y algunos precios de referencia."/>
                    <ParagraphSecPag paragraph="Nosotros lo analizaremos y luego nos contactaremos con vos para tener una reunion."/>
                </article>
            </section>
        </div>
    )
}
