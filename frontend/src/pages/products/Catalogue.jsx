import React from 'react'
import "./Products.css"
import { useParams } from "react-router-dom";

export default function Catalogue() {
  let category = useParams(); 
  console.log(category.categoria)
  return (
    <div className='Products_container'>
            <section className='Products_container_section1'>
                Catalogo de la categoria {category.categoria}

            </section>
        </div>
  )
}
