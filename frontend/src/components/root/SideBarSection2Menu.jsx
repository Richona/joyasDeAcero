import React from 'react'
import { Link } from 'react-router-dom';

import Accordion from 'react-bootstrap/Accordion';

export default function SideBarSection2Menu(props) {
    const clickInTitleCatalogue = (params) => {
        document.querySelector(".sideBar_ul").classList.toggle("sideBar_ul_none")
    }

    return (
        <Accordion.Item eventKey={`${props.eventKey}`} className='sideBar_section2_menu_accordion_item'>
            <Accordion.Header className='sideBar_section2_menu_accordion_item_header'>
                <Link to={`/productos/catalogo/${props.title}`} onClick={clickInTitleCatalogue}>{props.title}</Link>
                <i className="fa-solid fa-caret-down"></i>
            </Accordion.Header>
            <Accordion.Body className='sideBar_section2_menu_accordion_item_body'>
                <Accordion alwaysOpen={false} className='sideBar_section2_menu_accordion'>
                    {props.subName.map((sub, index) => (
                        (props.title === "PLATA" || props.title === "ACERO") ?
                            <Accordion.Item eventKey={`${index}`} className='sideBar_section2_menu_accordion_item' key={index}>
                                <hr className={`sidebar_section2_divider sidebar_section2_divider_${index}`} />
                                <Accordion.Header className='sideBar_section2_menu_accordion_item_header'>
                                    <Link to={`/productos/catalogo/${props.title}/${sub}`} onClick={clickInTitleCatalogue}>{sub}</Link>
                                    <i className="fa-solid fa-caret-down"></i>
                                </Accordion.Header>
                                <Accordion.Body className='sideBar_section2_menu_accordion_item_body'>
                                    <Accordion alwaysOpen={false} className='sideBar_section2_menu_accordion'>
                                        {props.subSubName.map((subSub, index) => (
                                            <Accordion.Item eventKey={`${index}`} className='sideBar_section2_menu_accordion_item' key={index}>
                                                <hr className={`sidebar_section2_divider sidebar_section2_divider_${index}`} />
                                                <Accordion.Header className='sideBar_section2_menu_accordion_item_header'>
                                                    <Link to={`/productos/catalogo/${props.title}/${sub}/${subSub}`} onClick={clickInTitleCatalogue}>{subSub}</Link>
                                                </Accordion.Header>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            :
                            <Accordion.Item eventKey={`${index}`} className='sideBar_section2_menu_accordion_item' key={index}>
                                <hr className={`sidebar_section2_divider sidebar_section2_divider_${index}`} />
                                <Accordion.Header className='sideBar_section2_menu_accordion_item_header'>
                                    <Link to={`/productos/catalogo/${props.title}/${sub}`} onClick={clickInTitleCatalogue}>{sub}</Link>
                                </Accordion.Header>
                            </Accordion.Item>
                    ))}
                </Accordion>

            </Accordion.Body>
            <hr className="sidebar_section2_divider" />
        </Accordion.Item>

    )
}
