import React from 'react'
import "./ToolbarCatalogueProducts.css"

import { Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';

export default function ToolbarCatalogueProducts(props) {
    /*<i className="fa-solid fa-circle-arrow-up"></i> */

    const changueIToSelectOrder = () =>{
        document.getElementById("arrowToSelectOrder").classList.toggle("fa-circle-arrow-down")
        document.getElementById("arrowToSelectOrder").classList.toggle("fa-circle-arrow-up")
    }
    return (
        <div className="ToolbarCatalogueProducts_container">
            <article className='ToolbarCatalogueProducts_article'>
                <span>Categoria </span>
                <Dropdown className='ToolbarCatalogueProducts_Dropdown'>
                    <Dropdown.Toggle id="dropdown-basic" bsPrefix={"hola"}>{`${props.title[0].toUpperCase()}${props.title.slice(1).toLowerCase()}`}<i className="fa-sharp fa-solid fa-angle-down"></i></Dropdown.Toggle>
                    <Dropdown.Menu className='ToolbarCatalogueProducts_Dropdown_Menu'>
                        {props.sub.map((item, index) => (
                            <Dropdown.Item key={index}><Link to={props.pather ? `/productos/catalogo/${props.pather}/${props.title}/${item}` : `/productos/catalogo/${props.title}/${item}`}>{`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}</Link></Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </article>
            <article className='ToolbarCatalogueProducts_article'>
                <span>Ordenar </span>
                <div>
                    <select className="" aria-label="">
                        <option defaultValue>Posición</option>
                        <option value="1">Nombre del producto</option>
                        <option value="2">Precio</option>
                        <option value="3">Orden nuevos</option>
                    </select>
                    <i className="fa-solid fa-circle-arrow-down ToolbarCatalogueProducts_article_Ordenar_i" onClick={changueIToSelectOrder} id="arrowToSelectOrder"></i>
                </div>
            </article>
            <article className='ToolbarCatalogueProducts_article'>
                <span>Mostrar </span>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>12</option>
                    <option value="1">24</option>
                    <option value="2">36</option>
                    <option value="3">48</option>
                </select>
            </article>
        </div>
    )
}
