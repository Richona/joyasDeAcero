import React from 'react'
import "./Products.css"

import HomeSectionSecPag from '../../components/secondaryPages/HomeSectionSecPag';
import BannerCatalogueProducts from '../../components/products/BannerCatalogueProducts';
import ToolbarCatalogueProducts from '../../components/products/ToolbarCatalogueProducts';
import Products from '../../components/home/Products';

import { useParams } from "react-router-dom";

export default function Catalogue() {
  let category = useParams();

  const arrayToSection2Menu = [
    {
        name: "ACERO",
        subName: ["ACERO DORADO Y ROSÉ", "ACERO BLANCO", "ACERO QUIRÚRJICO"],
        subSubName: ["ANILLOS", "AROS", "CADENAS", "DIJES", "PULSERAS"]
    },
    {
        name: "PLATA",
        subName: ["PLATA", "PLATA Y ORO", "PLATA DORADA Y ROSÉ"],
        subSubName: ["ANILLOS", "AROS", "CADENAS", "DIJES", "PULSERAS"]
    },
    {
        name: "ENCHAPADO EN ORO",
        subName: ["ANILLOS", "AROS", "CADENAS", "DIJES", "PULSERAS"],
        subSubName: []
    },
    {
        name: "NOVEDADES",
        subName: ["JOYAS DE ACERO", "JOYAS DE PLATA", "JOYAS ENCHAPADAS EN ORO"],
        subSubName: []
    },
]
  
  return (
    <div className='Products_container'>
            <section className='Products_container_section1'>
                <HomeSectionSecPag  title={category.categoria} subTitle={category.subcategoria} article={category.article}/>
                {(category.categoria === "ACERO" || category.categoria === "ENCHAPADO EN ORO") && <BannerCatalogueProducts category={category.categoria}/>} 

                {arrayToSection2Menu.map((item, index) => (
                  !category.subcategoria ? (item.name === category.categoria && <ToolbarCatalogueProducts title={item.name} sub={item.subName} key={"123"}/>)
                  :
                  ((item.name === "ACERO" || item.name === "PLATA") ? item.name === category.categoria && <ToolbarCatalogueProducts title={category.subcategoria} sub={item.subSubName} pather={item.name} key={"123"}/>
                  :
                  item.name === category.categoria && <ToolbarCatalogueProducts title={item.name} sub={item.subName} key={"123"}/>)
                ))}

                <Products />
                <Products />
            </section>
        </div>
  )
}
