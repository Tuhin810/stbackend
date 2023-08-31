import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { applicantContext } from '../../../context/applicantDetails/ApplicantContext';
// import { globalContext } from '../../../context/GlobalDetails/GlobalContext';
import { getuserDetails } from '../../../utils/commonFunctions/GetuserDetails';
import ApplicantNavbar1 from '../../pages/applicant/appplicantNavbar/ApplicantNavbar';
const ApplicantDashboard = () => {
    const { applicantDispatch } = useContext(applicantContext);

    useEffect(() => {
        const details = getuserDetails();
        applicantDispatch({ type: "refreshPage", payload: details })
    }, [])
    return (
        <div>
            <ApplicantNavbar1 />
            <div className='mt-28'>
                <Outlet />
            </div>
        </div>
    )
}

export default ApplicantDashboard
