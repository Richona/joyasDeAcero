import React from 'react'
import "./SecondPages.css"

import HomeSectionSecPag from '../../components/secondaryPages/HomeSectionSecPag';
import TitleH2SecPag from '../../components/secondaryPages/TitleH2SecPag';
import ParagraphSecPag from '../../components/secondaryPages/ParagraphSecPag';

export default function BePartOfOurStaff() {
    return (
        <div className='SecondPage_container'>
            <section className='SecondPage_container_section1'>
                
                <HomeSectionSecPag title="Ser parte de nuestro Staff" />
                <article className='SecondPage_container_article1'>
                    <TitleH2SecPag title="Para formar parte de nuestro staff" />
                    <ParagraphSecPag paragraph="Sólo tenes que escribirnos a rrhh.joyasdeacero@gmail.com contandonos un poco de vos, muuy importante que adjuntes tu CV y nos des algunos contactos de referencia de tus trabajos anteriores si hubieran."/>
                    <ParagraphSecPag paragraph="Nosotros lo analizaremos y luego nos contactaremos con vos ."/>
                </article>
            </section>
        </div>
    )
}
