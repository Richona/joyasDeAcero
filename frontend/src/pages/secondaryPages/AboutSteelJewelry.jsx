import React from 'react'
import "./SecondPages.css"

import HomeSectionSecPag from '../../components/secondaryPages/HomeSectionSecPag';
import TitleH1SecPag from '../../components/secondaryPages/TitleH1SecPag';
import ParagraphSecPag from '../../components/secondaryPages/ParagraphSecPag';

export default function AboutSteelJewelry() {
    return (
        <div className='SecondPage_container'>
            <section className='SecondPage_container_section1'>
                <HomeSectionSecPag title="Sobre Joyas de Acero" />
                
                <article className='SecondPage_container_article1'>
                    <TitleH1SecPag title="QUIÉNES SOMOS"/>
                    <ParagraphSecPag paragraph="Con 40 años de trayectoria en el mundo de la bijouterie, Joyas de Acero abrió sus puertas al público en diciembre de 2010. Nuestra filosofía: ofrecer a nuestros clientes los artículos en acero quirúrgico, plata, relojería y accesorios, más novedosos, de la mayor calidad y al mejor precio"/>
                    <ParagraphSecPag paragraph="Con un inigualable surtido, en Joyas de Acero vas a encontrar todo lo que necesitas: en joyeria, relojes, accesorios de pelo, marroquinería y mucho más!"/>
                    <ParagraphSecPag paragraph="Sumado a esto, nuestro equipo fue capacitado para ofrecer la mejor atención y cumplir con la entrega de los pedidos en el menor tiempo posible. Todas tus dudas van a ser respondidas con la mayor claridad y eficiencia."/>
                </article>
            </section>
        </div>
    )
}
