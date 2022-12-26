import React from 'react'
import "./SideBar.css"
import SideBarSection2Menu from './SideBarSection2Menu';
import SideBarSection2Cuenta from './SideBarSection2Cuenta';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const SideBar = () => {
    function buttonSideBar() {
        document.getElementById("accordionSidebar").classList.toggle("sideBar_ul_none")
    }
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

      const arrayToSection2Cuenta = ["Compra mínima $8.000", "Consultas", "Iniciar sesión", "Crear una cuenta"]

    return (
        <ul className="navbar-nav bg-gradient sidebar sidebar-dark accordion sideBar_ul sideBar_ul_none" id="accordionSidebar" >
            <li className='sideBar_section1_salida' onClick={buttonSideBar}>
                <i className="fa-regular fa-circle-xmark"></i>
            </li>

            <hr className="sidebar-divider" />

            <Tabs defaultActiveKey="menu" id="uncontrolled-tab-example" className="mb-3 sideBar_section2">
                <Tab eventKey="menu" title="Menú" className='sideBar_section2_Tab'>
                    {/* SECTION 2 MENU */}
                    {arrayToSection2Menu.map((item, index) => (
                        <SideBarSection2Menu title={item.name} eventKey={index} subName={item.subName} subSubName={item.subSubName} key={index}/>
                    ))}

                </Tab>
                <Tab eventKey="cuenta" title="Cuenta" className='sideBar_section2_Tab'>
                    {/* SECTION 2 CUENTA */}
                    {arrayToSection2Cuenta.map((item, index) => (
                        <SideBarSection2Cuenta title={item} eventKey={index} key={index}/>
                    ))}
                </Tab>
            </Tabs>
        </ul>
    )
}
