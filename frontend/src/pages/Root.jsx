import React from 'react'
import {Outlet} from 'react-router-dom'
import { Footer } from '../components/root/Footer'
import { SideBar } from '../components/root/SideBar'
import { TopBar } from '../components/root/TopBar'

export const Root = () => {
    return (
        <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column" style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
                <div id="content" style={{flex: "1"}}>

                    <TopBar />

                    <Outlet/>
                </div>

                <Footer/>
            </div>
        </div>
    )
}
