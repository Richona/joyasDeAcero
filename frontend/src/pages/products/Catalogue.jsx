import React from 'react'
import "./Products.css"

import HomeSectionSecPag from '../../components/secondaryPages/HomeSectionSecPag';
import BannerCatalogueProducts from '../../components/products/BannerCatalogueProducts';
import Products from '../../components/home/Products';

import { useParams } from "react-router-dom";

export default function Catalogue() {
  let category = useParams(); 
  
  return (
    <div className='Products_container'>
            <section className='Products_container_section1'>
                <HomeSectionSecPag  title={category.categoria} subTitle={category.subcategoria} article={category.article}/>
                {(category.categoria === "ACERO" || category.categoria === "ENCHAPADO EN ORO") && <BannerCatalogueProducts category={category.categoria}/>} 
                <Products />
                <Products />
            </section>
        </div>
  )
}
