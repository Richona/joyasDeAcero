import React from 'react'
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export const TopBarSection5 = (props) => {
    const subNameToArray = props.subName.split(",")
    const subSubNameToArray = props.subSubName.split(",")

    return (
        <Dropdown as={ButtonGroup} align={{ lg: 'start' }}>
            <Link to="/productos/catalogo"><Button variant="secondary" className="topBar_section5_button topBar_section5_buttonNoPadding">{props.name}</Button></Link>
            <Dropdown.Toggle className="topBar_section5_Toggle" split variant="secondary" id="dropdown-custom-2" />
            <Dropdown.Menu className="topBar_section5_Menu">
                {subNameToArray.map((sub, index) => (
                    <li className="topBar_section5_subMenuLi" key={index}>
                        {(props.name === "PLATA" || props.name === "ACERO") ?
                            <Dropdown as={ButtonGroup} drop={"end"} className="topBar_section5_subMenuDropdown">
                                <Link to={"/productos/catalogo"}><Button variant="secondary" className="topBar_section5_button topBar_section5_subMenubutton">{sub}</Button></Link>
                                <Dropdown.Toggle className="topBar_section5_Toggle topBar_section5_subMenuToggle" bsPrefix={"as"} split variant="secondary" id="dropdown-custom-2">
                                    <i className="fa-solid fa-caret-right"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="topBar_section5_Menu">
                                    {subSubNameToArray.map((sub, index) => (
                                        
                                            <Dropdown.Item className="topBar_section5_Menu_item" key={index} eventKey={index}>
                                                <Link to={"/productos/catalogo"}>{sub}</Link>
                                            </Dropdown.Item>
                                        
                                    ))}
                                </Dropdown.Menu>

                            </Dropdown>
                            :
                            
                                <Dropdown.Item className="topBar_section5_Menu_item" key={index} eventKey={index}>
                                    <Link to={"/productos/catalogo"}>{sub}</Link>
                                </Dropdown.Item>
                            
                        }
                    </li>
                ))}
            </Dropdown.Menu>

        </Dropdown>
    )
}
