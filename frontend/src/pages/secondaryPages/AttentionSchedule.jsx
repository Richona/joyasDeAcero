import React from 'react';
import "./SecondPages.css"

import HomeSectionSecPag from '../../components/secondaryPages/HomeSectionSecPag';
import TitleH1SecPag from '../../components/secondaryPages/TitleH1SecPag';
import ParagraphSecPag from '../../components/secondaryPages/ParagraphSecPag';

const Attentionschedule = () => {
    return (
        <div className='SecondPage_container'>
            <section className='SecondPage_container_section1'>
                <HomeSectionSecPag title="Horarios de Atención" />

                <article className='SecondPage_container_article1'>
                    <TitleH1SecPag title="Horarios de Atención" />
                    <br/>
                    <ParagraphSecPag paragraph="El horario de atención del local ubicado en Monolito es de " b="Lunes a Viernes de 9.00 a 17.30pm" />
                    <ParagraphSecPag paragraph="Podes acercarte a ver nuestra mercadería y comprar en nuestro local o solamente venir a retirar tu pedido de la web" />
                    <br />
                    <ParagraphSecPag paragraph="Se entregarán aquellos pedidos que hayan recibido la confirmación del armado que habilita el retiro. Por favor no vengan al local si no recibieron ese mail ya que el pedido no va a estar y no podremos asegurar la entrega ese día.  " />
                    <br />
                    <ParagraphSecPag paragraph="Nuestro horario de atención telefónica es de " b="Lunes a Viernes de 9 a 18pm." />
                    <br />
                    <ParagraphSecPag paragraph="¡Gracias por tu comprensión!" />
                    <br />
                    <ParagraphSecPag b="El equipo de Joyas de Acero" />
                </article>
            </section>
        </div>
    );
}

export default Attentionschedule;
