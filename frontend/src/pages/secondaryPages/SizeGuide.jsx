import React from 'react'
import "./SecondPages.css"

import HomeSectionSecPag from '../../components/secondaryPages/HomeSectionSecPag';
import TitleH2SecPag from '../../components/secondaryPages/TitleH2SecPag';
import ParagraphSecPag from '../../components/secondaryPages/ParagraphSecPag';

export default function SizeGuide() {
    return (
        <div className='SecondPage_container'>
            <section className='SecondPage_container_section1'>
                <HomeSectionSecPag title="Guía de talles" />
                <article className='SecondPage_container_article1'>
                    <TitleH2SecPag title="Para saber qué talle de anillo necesitas" />
                    <ParagraphSecPag paragraph="1-Decidí en qué dedo querés lucir tu anillo y de qué mano."/>
                    <ParagraphSecPag paragraph="2-Buscá un anillo que te quede bien (en ese dedo y de esa mano)."/>
                    <ParagraphSecPag paragraph="3-Medi con una regla el diametro interno del anillo en mm."/>
                    <ParagraphSecPag paragraph="4-El resultado de ese diámetro en milímetros, buscalos en la tabla que te dejamos debajo para saber cuál es tu medida."/>
                    <figure>
                        <img style={{width: "100%"}} src="https://gratia-production.b-cdn.net/pub/media/encabezadosPaginasEstaticas/95258557_1147224602306315_5516934836591263744_n.jpg" alt="" />
                    </figure>
                    <figure>
                        <img style={{width: "100%"}} src="https://gratia-production.b-cdn.net/pub/media/encabezadosPaginasEstaticas/diametro-anillos-min_1.jpg" alt="" />
                    </figure>
                    <br />
                    <TitleH2SecPag title="OTRA OPCIÓN PARA AVERIGUAR EL TALLE QUE PRECISAS" />
                    <ParagraphSecPag paragraph="1-Cinta o papel del ancho del anillo deseado."/>
                    <ParagraphSecPag paragraph="2-Ponerlo al rededor del dedo para medir su contorno"/>
                    <ParagraphSecPag paragraph="3-Buscar el largo en una regla"/>
                    <ParagraphSecPag paragraph="4-Comparar con la siguiente tabla"/>
                    <figure>
                        <img style={{width: "100%"}} src="https://gratia-production.b-cdn.net/pub/media/sliderhome/IMG_6111-min.PNG" alt="" />
                    </figure>
                    <br />
                    <TitleH2SecPag title="Largo de Cadenas" />
                    <ParagraphSecPag paragraph="En cada cadena vas a tener detallado en el nombre el largo de ese producto"/>
                    <ParagraphSecPag paragraph="Te mostramos como quedan puestas las cadenas de 40, 45 y 50cm"/>
                    <figure>
                        <img style={{width: "100%"}} src="https://gratia-production.b-cdn.net/pub/media/sliderhome/A095AC62-4E2E-4162-B6DF-A62E408D2B65-min_1_.jpg" alt="" />
                    </figure>
                </article>
            </section>
        </div>
    )
}
