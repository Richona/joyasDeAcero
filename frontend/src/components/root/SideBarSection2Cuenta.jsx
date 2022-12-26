import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function SideBarSection2Cuenta(props) {
    return (
        <Accordion alwaysOpen className='sideBar_section2_menu_accordion' key={props.eventKey}>
            <Accordion.Item eventKey={props.eventKey} className='sideBar_section2_menu_accordion_item'>
                <Accordion.Header className='sideBar_section2_menu_accordion_item_header'>
                    {props.title}
                </Accordion.Header>
            </Accordion.Item>
            <hr className="sidebar-divider" />
        </Accordion>
    )
}
