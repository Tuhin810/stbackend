import React from 'react'
import { Outlet } from 'react-router-dom'
import RecruitetNavbar from '../../pages/recruiter/navbar/RecruitetNavbar'
import NavBar from '../../shared/navbar/NavBar'

const RecruiterDashboard = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default RecruiterDashboard
