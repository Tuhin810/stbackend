import { useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import RecruitetNavbar from '../../recruiter/navbar/RecruitetNavbar'
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext'
import { getuserDetails } from '../../../../utils/commonFunctions/GetuserDetails'
import './RecruiterDashboard.css'
import JobListState from '../../../../context/jobDetails/JobDetailsState'
import { showModal } from '../../../../utils/commonFunctions/HandleModal'
import { LockModal } from '../../recruiter/modal/ErrorModal/LockModal/lockModal'
// import { guard } from '../../../../guards/UserTypeGuard'

const RecruiterDashboard = () => {
  // const navigate = useNavigate();
  const { dispatch } = useContext(recruiterContext);
  const { recruiterloggedinDetails } = useContext(recruiterContext);
  const { recruiterDetails } = recruiterloggedinDetails;
  const location = useLocation();

  const checkRecruiter = () => {
    const details = getuserDetails();
    dispatch({ type: "refreshPage", payload: details });
    console.log(recruiterloggedinDetails);
  }

  useEffect(()=>{
      if (!location.pathname.includes("pricing") && !recruiterDetails.subscription) {
        showModal('lockPage')
      }
  },[location.pathname])

  useEffect(() => {
    checkRecruiter();
  }, []);

  return (
    <JobListState>
      <div>
        <RecruitetNavbar />
        <div className="p-4 sm:px-12 sm:ml-64 mt-20 min-h-screen ">
          <LockModal />
          <Outlet />
        </div>
      </div>
    </JobListState>
  )
}

export default RecruiterDashboard
