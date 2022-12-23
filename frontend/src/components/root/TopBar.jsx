import React, { useState } from 'react';
import "./TopBar.css"
import Modal from 'react-bootstrap/Modal';

export const TopBar = () => {
  function buttonSideBar() {
    document.getElementById("accordionSidebar").classList.toggle("sideBar_ul_none")
  }

  function buttonSearch() {
    document.getElementById("topBar_section3_search").classList.toggle("topBar_section3_formSearch")
  }

  const [smShow, setSmShow] = useState(false);

  return (
    <nav className="topBar_nav">
      <section className='topBar_section1'>
        <nav className="nav" >
          <a className="nav-link active" aria-current="page" href="/">HORARIOS DE ATENCIÓN</a>
          <a className="nav-link" href="/">DÓNDE ENCONTRARNOS</a>
          <a className="nav-link" href="/">CÓMO COMPRAR</a>
          <a className="nav-link topBar_section1_rightA" href="/">LLAMANOS: numero1234</a>
        </nav>
      </section>

      <div className='topBar_section2Dividir'></div>

      <section className='topBar_section3'>
        <nav className="nav d-flex row">
          <div className="sidebar-brand-icon p-2 flex-grow-1">
            <img className="w-1 topBar_section3_img" src="/images/logoJoyasDeAcero.jpg" alt="Buon Aseo" />
          </div>
          <div id="sidebarToggleTop" className='d-flex align-items-center p-1'>
            <i class="fa-solid fa-magnifying-glass" onClick={buttonSearch}></i>
          </div>
          <div className="d-flex align-items-center p-2" >
            <i className="fa fa-bars" onClick={buttonSideBar}></i>
          </div>
          <div className='d-flex align-items-center p-2'>
            <i class="fa-solid fa-bag-shopping mr-2" onClick={() => setSmShow(true)} ></i>
            <span onClick={() => setSmShow(true)}>0 ARTÍCULOS</span>
          </div>
          <Modal
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
              className='topBar_section3_modalCart'
            >
              <Modal.Header closeButton>
                <i class="fa-solid fa-bag-shopping mr-2" ></i>
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
      <section className='topBar_section4'>
        
      </section>
    </nav>
  )
}
