import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function SideBarSection2Menu(props) {
    return (
        <Accordion alwaysOpen className='sideBar_section2_menu_accordion'>
            <Accordion.Item eventKey={`${props.eventKey}`} className='sideBar_section2_menu_accordion_item'>
                <Accordion.Header className='sideBar_section2_menu_accordion_item_header'>
                    {props.title}
                    <i className="fa-solid fa-caret-down"></i>
                </Accordion.Header>
                <Accordion.Body className='sideBar_section2_menu_accordion_item_body'>
                    {props.subName.map((sub, index) => (
                        (props.title === "PLATA" || props.title === "ACERO") ? 
                        <Accordion alwaysOpen className='sideBar_section2_menu_accordion' key={index}>
                            <hr className="sidebar-divider" />
                            <Accordion.Item eventKey={`${index}`} className='sideBar_section2_menu_accordion_item'>
                                <Accordion.Header className='sideBar_section2_menu_accordion_item_header'>
                                    {sub}
                                    <i className="fa-solid fa-caret-down"></i>
                                </Accordion.Header>
                                <Accordion.Body className='sideBar_section2_menu_accordion_item_body'>
                                    {props.subSubName.map((subSub, index) => (
                                        <Accordion alwaysOpen className='sideBar_section2_menu_accordion' key={index}>
                                        <hr className="sidebar-divider" />
                                        <Accordion.Item eventKey={`${index}`} className='sideBar_section2_menu_accordion_item'>
                                            <Accordion.Header className='sideBar_section2_menu_accordion_item_header'>
                                                {subSub}
                                            </Accordion.Header>
                                        </Accordion.Item>
                                    </Accordion>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>  
                        </Accordion>
                        :
                        <Accordion alwaysOpen className='sideBar_section2_menu_accordion' key={index}>
                            <hr className="sidebar-divider" />
                            <Accordion.Item eventKey={`${index}`} className='sideBar_section2_menu_accordion_item'>
                                <Accordion.Header className='sideBar_section2_menu_accordion_item_header'>
                                    {sub}
                                </Accordion.Header>
                            </Accordion.Item>
                        </Accordion>
                    ))}
                </Accordion.Body>
            </Accordion.Item>
            <hr className="sidebar-divider" />
        </Accordion>
    )
}
