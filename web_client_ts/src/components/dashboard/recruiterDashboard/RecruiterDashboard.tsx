import { useContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import RecruitetNavbar from '../../pages/recruiter/navbar/RecruitetNavbar'
import { globalContext } from '../../../context/GlobalDetails/GlobalContext'
import { recruiterContext } from '../../../context/recruiterDetails/RecruiterContext'
import { getuserDetails } from '../../../utils/commonFunctions/GetuserDetails'
import { getUserType } from '../../../guards/UserTypeGuard'

const RecruiterDashboard = () => {
  const { dispatch } = useContext(recruiterContext);
  const { loggedIn } = useContext(globalContext);



  useEffect(() => {
    const details = getuserDetails();
    dispatch({ type: "login", payload: details })
    loggedIn({ type: "login", userType: "recruiter" });
  }, [])
  return (
    <div>
      <div>
        <RecruitetNavbar />
        <div className='mt-20'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default RecruiterDashboard
