import { useContext,useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import RecruitetNavbar from '../../recruiter/navbar/RecruitetNavbar'
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext'
import { getuserDetails } from '../../../../utils/commonFunctions/GetuserDetails'
import SideBar from '../../recruiter/sidebar/SideBar'
import './RecruiterDashboard.css'
import JobListState from '../../../../context/jobDetails/JobDetailsState'
import { guard } from '../../../../guards/UserTypeGuard'

const RecruiterDashboard = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(recruiterContext);
  const { recruiterloggedinDetails } = useContext(recruiterContext);

  const checkRecruiter = ()=>{
    if(guard("recruiter")){
      navigate("/applicant");
    }
    else{
      const details = getuserDetails();
      dispatch({ type: "refreshPage", payload: details });
      console.log(recruiterloggedinDetails);
    }
  }

  useEffect(() => {
   checkRecruiter();
  }, [])
  return (
    <JobListState>
      <div>
        <RecruitetNavbar />
        <SideBar />
        <div className="p-4 sm:px-12 sm:ml-64 mt-20 min-h-screen ">
          <Outlet />
        </div>
      </div>
    </JobListState>
  )
}

export default RecruiterDashboard
