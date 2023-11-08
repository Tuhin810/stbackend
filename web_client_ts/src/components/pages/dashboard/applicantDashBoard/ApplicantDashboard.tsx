import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { applicantContext } from '../../../../context/applicantDetails/ApplicantContext';
// import { globalContext } from '../../../context/GlobalDetails/GlobalContext';
import { getuserDetails } from '../../../../utils/commonFunctions/GetuserDetails';
import ApplicantNavbar from '../../applicant/appplicantNavbar/ApplicantNavbar';
import InvitedAppliedJobListState from '../../../../context/invitedAppliedJobDetailsList/InvitedAcceptedJobDetailsState';
const ApplicantDashboard = () => {
    const { applicantDispatch } = useContext(applicantContext);

    useEffect(() => {
        const details = getuserDetails();
        applicantDispatch({ type: "refreshPage", payload: details })
    }, [])
    return (
        <div className=' min-h-screen'>
            <InvitedAppliedJobListState>
                <ApplicantNavbar />
                <Outlet />
            </InvitedAppliedJobListState>
        </div>
    )
}

export default ApplicantDashboard
