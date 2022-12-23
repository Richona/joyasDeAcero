import React from 'react'
import {Outlet} from 'react-router-dom'
import { Footer } from '../components/root/Footer'
import { SideBar } from '../components/root/SideBar'
import { TopBar } from '../components/root/TopBar'

export const Root = () => {
    return (
        <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">

                    <TopBar />

                    <Outlet/>
                </div>

                <Footer/>
            </div>
        </div>
    )
}
