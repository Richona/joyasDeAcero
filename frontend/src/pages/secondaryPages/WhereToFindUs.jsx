import React from 'react';
import "./SecondPages.css"

import HomeSectionSecPag from '../../components/secondaryPages/HomeSectionSecPag';
import TitleH2SecPag from '../../components/secondaryPages/TitleH2SecPag';

const WhereToFindUs = () => {
    return (
        <div className='SecondPage_container'>
            <section className='SecondPage_container_section1'>
                <HomeSectionSecPag title="Locales" />
                
                <article className='SecondPage_container_article1'>
                    <TitleH2SecPag title="Locales"/>
                    <iframe title='iframeDeGugul' className='SecondPage_container_article1_iframeDeGugul' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1551.7770929790918!2d-69.2328077265613!3d-38.9341661326706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1672870869728!5m2!1ses!2sar"  style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </article>
            </section>
        </div>
    );
}

export default WhereToFindUs;
