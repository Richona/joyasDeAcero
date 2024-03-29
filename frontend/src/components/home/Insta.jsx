import React from 'react';
import "./Insta.css"

const Insta = () => {
    return (
        <article className='instaHome_container'>
            <div className='instaHome_container_div'>
                <div className="instaHome_container_div_Insta">
                    <i className="fa-brands fa-instagram"></i>
                    <h3>INSTAGRAM</h3>
                    <span>@_cuevas1_</span>
                    <a className="btn btn-default" href="/" rel="noreferrer">Seguir</a>
                </div>

                <div className="instaHome_container_div_img">
                    <img src="https://gratia-production.b-cdn.net/pub/media/wysiwyg/INSTAGRAM_GRATIA_WEB_5_.jpg" alt="" />
                </div>
            </div>
        </article>
    );
}

export default Insta;
