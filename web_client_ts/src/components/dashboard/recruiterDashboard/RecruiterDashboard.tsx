import { useContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import RecruitetNavbar from '../../pages/recruiter/navbar/RecruitetNavbar'
import { globalContext } from '../../../context/GlobalDetails/GlobalContext'
import { recruiterContext } from '../../../context/recruiterDetails/RecruiterContext'
import { getuserDetails } from '../../../utils/commonFunctions/GetuserDetails'

const RecruiterDashboard = () => {
  const { dispatch } = useContext(recruiterContext);
  const globalState = useContext(globalContext);

  useEffect(() => {
    const details = getuserDetails();
    dispatch({ type: "login", payload: details })
  }, [])

  return (
    <div>
      <div>
        <RecruitetNavbar />
        <Outlet />
      </div>
    </div>
  )
}

export default RecruiterDashboard
