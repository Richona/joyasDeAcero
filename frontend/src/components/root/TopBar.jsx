import React from 'react';
import "./TopBar.css"

export const TopBar = () => {
  function buttonSideBar() {
    document.getElementById("accordionSidebar").classList.toggle("sideBar_ul_none")
  }
  
  return (
    <nav className="topBar_nav">
      <section className='topBar_section1'>
        <nav className="nav">
          <a className="nav-link active" aria-current="page" href="/">HORARIOS DE ATENCIÓN</a>
          <a className="nav-link" href="/">DÓNDE ENCONTRARNOS</a>
          <a className="nav-link" href="/">LLAMANOS: numero1234</a>
          <a className="nav-link" href="/">CÓMO COMPRAR</a>
        </nav>
      </section>
      <section className='topBar_section2'>

      </section>
      <section className='topBar_section3'>
        <nav className="nav">
          <div className="sidebar-brand-icon">
            <img className="w-1 topBar_section3_img" src="/images/logoJoyasDeAcero.jpg" alt="Buon Aseo" />
          </div>
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={buttonSideBar}>
            <i className="fa fa-bars"></i>
          </button>
        </nav>
      </section>
    </nav>
  )
}
