import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export const TopBarSection5 = (props) => {
    const subNameToArray = props.subName.split(",")
    const subSubNameToArray = props.subSubName.split(",")

    return (
        <Dropdown as={ButtonGroup} align={{ lg: 'start' }}>
            <Button variant="secondary" className="topBar_section5_button">{props.name}</Button>
            <Dropdown.Toggle className="topBar_section5_Toggle" split variant="secondary" id="dropdown-custom-2" />
            <Dropdown.Menu className="topBar_section5_Menu">
                {subNameToArray.map((sub, index) => (
                    <li className="topBar_section5_subMenuLi" key={index}>
                        {(props.name === "PLATA" || props.name === "ACERO") ?
                        <Dropdown as={ButtonGroup} drop={"end"} className="topBar_section5_subMenuDropdown">
                            <Button variant="secondary" className="topBar_section5_button topBar_section5_subMenubutton">{sub}</Button>
                            <Dropdown.Toggle className="topBar_section5_Toggle topBar_section5_subMenuToggle" bsPrefix={"as"} split variant="secondary" id="dropdown-custom-2">
                                <i className="fa-solid fa-caret-right"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="topBar_section5_Menu">
                                {subSubNameToArray.map((sub, index) => (
                                    <Dropdown.Item className="topBar_section5_Menu_item" key={index} eventKey={index}>
                                        {sub}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>

                        </Dropdown>
                        : 
                        <Dropdown.Item className="topBar_section5_Menu_item" key={index} eventKey={index}>
                        {sub}
                        </Dropdown.Item>}
                    </li>
                ))}
            </Dropdown.Menu>

        </Dropdown>
    )
}
