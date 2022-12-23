import React from 'react'
import { Link } from 'react-router-dom';
import "./SideBar.css"

export const SideBar = () => {
    function buttonSideBar() {
        document.getElementById("accordionSidebar").classList.toggle("sideBar_ul_none")
    }
    return (
        <ul className="navbar-nav bg-gradient sidebar sidebar-dark accordion sideBar_ul sideBar_ul_none" id="accordionSidebar" >
            <li className='sideBar_salida'onClick={buttonSideBar}>
                <p>X</p>
            </li>

            <hr className="sidebar-divider"/>
            
            <Link className="sideBar_imgLogo" to="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100" style={{ height: "100px" }} src="/images/logoJoyasDeAcero.jpg" alt="Buon Aseo" />
                </div>
            </Link>


            <hr className="sidebar-divider mt-3" />


            <li className="nav-item active ">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span  >Joyas de acero</span></Link>
            </li>


            <hr className="sidebar-divider mt-3" />


            <div className="sidebar-heading">NAVEGACIÓN</div>


            <li className="nav-item">
                <Link className="nav-link collapsed" to="/products">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Productos</span>
                </Link>
            </li>


            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    )
}
