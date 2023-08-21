import React from 'react'
import Nav from '../../shared/navbar/NavBar'
import Home from '../../pages/home/Home'
import HowWorks from '../../pages/how_works/HowWorks'
import { Outlet } from 'react-router-dom'
import NavBar from '../../shared/navbar/NavBar'

const LandingPage = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default LandingPage
