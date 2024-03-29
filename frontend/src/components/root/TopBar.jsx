import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

import "./TopBar.css"
import { TopBarSection5 } from './TopBarSection5';

export const TopBar = () => {
  function buttonSideBar() {
    document.getElementById("accordionSidebar").classList.toggle("sideBar_ul_none")
  }

  function buttonSearch() {
    document.getElementById("topBar_section3_search").classList.toggle("topBar_section3_formSearch")
  }

  const [smShow, setSmShow] = useState(false);

  const arrayToSection5 = [
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

  return (
    <nav className="topBar_nav">
      <section className='topBar_section1'>
        <nav className="nav" >
          <Link className="nav-link active" aria-current="page" to="/horarios-de-atencion">HORARIOS DE ATENCIÓN</Link>
          <Link className="nav-link" to="/locales">DÓNDE ENCONTRARNOS</Link>
          <Link className="nav-link" to="/como-comprar">CÓMO COMPRAR</Link>
          <span className="nav-link topBar_section1_rightA" href="/">LLAMANOS: numero1234</span>
        </nav>
      </section>

      <section className='topBar_section2Dividir'>
        <div className='topBar_section2Dividir_container'>
          <nav className='nav topBar_section2Dividir_nav'>
            <span className="nav-link active" aria-current="page" href="/">COMPRA MÍNIMA $8.000</span>
            <Link className="nav-link" to="/contacto">CONSULTAS</Link>
            <Link className="nav-link" to="/usuarios/ingresar">INICIAR SESIÓN</Link>
            <Link className="nav-link topBar_section1_rightA" to="/usuarios/registrarse">CREAR UNA CUENTA</Link>
          </nav>
        </div>
      </section>

      <section className='topBar_section3'>
        <nav className="nav d-flex topBar_section3_nav">
          <div className="sidebar-brand-icon flex-grow-1">
            <Link to="/"><img className="w-1 topBar_section3_img" src="/images/logoJoyasDeAcero.jpg" alt="Buon Aseo" /></Link>
            <span className='topBar_section3_textImg'>Joyas de Acero</span>
          </div>
          <div className='d-flex align-items-center p-1 topBar_section3_containerSearchDesktop'>
            <form action="" id='topBar_section3_searchDesktop' className='topBar_section3_formSearchDesktop'>
              <input type="text" placeholder='BUSCAR...' className='shadow p-1 bg-body rounded' />
              <i className="fa-solid fa-magnifying-glass"></i>
            </form>
          </div>
          <div id="sidebarToggleTop" className='d-flex align-items-center topBar_section3_navNoneDeks'>
            <i className="fa-solid fa-magnifying-glass topBar_section3_i" onClick={buttonSearch}></i>
          </div>
          <div className="d-flex align-items-center topBar_section3_navNoneDeks" >
            <i className="fa fa-bars topBar_section3_i" onClick={buttonSideBar}></i>
          </div>
          <div className='d-flex align-items-center topBar_section3_navNoneDeks'>
            <i className="fa-solid fa-bag-shopping mr-2 topBar_section3_i" onClick={() => setSmShow(true)} ></i>
            <span onClick={() => setSmShow(true)} className="topBar_section3_spanText">0 ARTÍCULOS</span>
          </div>
          <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
            className='topBar_section3_modalCart'
          >
            <Modal.Header closeButton>
              <i className="fa-solid fa-bag-shopping mr-2" ></i>
            </Modal.Header>
            <Modal.Body>
              No hay articulos en tu carrito
            </Modal.Body>
          </Modal>
        </nav>
        <form action="" id='topBar_section3_search' className='topBar_section3_formSearch'>
          <input type="text" placeholder='Buscar...' className='shadow p-1 bg-body rounded topBar_section3_formSearch_input' />
        </form>
      </section>

      <div className='topBar_section4Dividir'></div>

      {/* SECTION 5 */}
      <section className='topBar_section5'>
        <nav className='nav topBar_section5_nav'>
          {arrayToSection5.map((item, index) => (
            <TopBarSection5 name={`${item.name}`} subName={`${item.subName}`} subSubName={`${item.subSubName}`} key={index}/>
          ))}
          <div className='d-flex align-items-center p-2 topBar_section5_buttonNoPadding'>
            <i className="fa-solid fa-bag-shopping mr-2" onClick={() => setSmShow(true)} ></i>
            <span onClick={() => setSmShow(true)}>0 ARTÍCULOS</span>
          </div>
        </nav>
      </section>
    </nav>
  )
}
