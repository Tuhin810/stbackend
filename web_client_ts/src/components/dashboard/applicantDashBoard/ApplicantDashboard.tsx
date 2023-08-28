import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { applicantContext } from '../../../context/applicantDetails/ApplicantContext';
import { globalContext } from '../../../context/GlobalDetails/GlobalContext';
import { getuserDetails } from '../../../utils/commonFunctions/GetuserDetails';

const ApplicantDashboard = () => {
    const { applicantDispatch } = useContext(applicantContext);
    const { applicantloggedinDetails } = useContext(applicantContext);
    const { loggedIn } = useContext(globalContext);
  
    useEffect(() => {
      const details = getuserDetails();
      applicantDispatch({ type: "refreshPage", payload: details })
    }, [])
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default ApplicantDashboard
