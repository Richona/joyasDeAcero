import React from 'react'
import "./BannerCatalogueProducts.css"

export default function BannerCatalogueProducts(props) {
    return (
        <div className='BannerCatalogueProducts_container'>
            <figure className='BannerCatalogueProducts_containerImg'>
                <img src={props.category === "ACERO" ? `https://gratia.com.ar/pub/media/catalog/tmp/category/ACERO_1.jpg` : 'https://gratia.com.ar/pub/media/catalog/tmp/category/ENCHAPADO.jpg'} alt="ACERO" title="ACERO" className="image" />
            </figure>
        </div>
    )
}
