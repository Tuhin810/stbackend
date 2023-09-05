import { useContext,useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import RecruitetNavbar from '../../pages/recruiter/navbar/RecruitetNavbar'
import { recruiterContext } from '../../../context/recruiterDetails/RecruiterContext'
import { getuserDetails } from '../../../utils/commonFunctions/GetuserDetails'
import SideBar from '../../pages/recruiter/sidebar/SideBar'
import './RecruiterDashboard.css'
import JobListState from '../../../context/jobDetails/JobDetailsState'

const RecruiterDashboard = () => {
  const { dispatch } = useContext(recruiterContext);
  const { recruiterloggedinDetails } = useContext(recruiterContext);

  useEffect(() => {
    const details = getuserDetails();
    dispatch({ type: "refreshPage", payload: details });
    console.log(recruiterloggedinDetails);

  }, [])
  return (
    <JobListState>
      <div>
        <RecruitetNavbar />
        <SideBar />
        <div className="p-4 px-12 sm:ml-64 mt-20">
          <Outlet />
        </div>
      </div>
    </JobListState>
  )
}

export default RecruiterDashboard
