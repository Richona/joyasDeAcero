import React from 'react'
import { Link } from 'react-router-dom';

import Accordion from 'react-bootstrap/Accordion';

export default function SideBarSection2Cuenta(props) {
    const clickInTitleCatalogue = (params) => {
        document.querySelector(".sideBar_ul").classList.toggle("sideBar_ul_none")
    }

    return (
        <Accordion className='sideBar_section2_menu_accordion' key={props.eventKey}>

            <Accordion.Item eventKey={props.eventKey} className='sideBar_section2_menu_accordion_item'>
                <Accordion.Header className='sideBar_section2_menu_accordion_item_header'>
                    {props.title !== "Compra mínima $8.000" ?
                        <Link to={props.link} onClick={clickInTitleCatalogue}>{props.title}</Link>
                        :
                        props.title
                    }
                </Accordion.Header>
            </Accordion.Item>
            <hr className="sidebar_section2_divider" />
        </Accordion>
    )
}
