import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./components/pages/common/home/Home";
import Login from "./components/pages/applicant/auth/Login/Login";
import Signup from "./components/pages/applicant/auth/SignUp/Signup";
import Jobs from "./components/pages/applicant/jobs/Jobs";
import UserType from "./components/pages/common/usertype/UserType";
import RecruiterSignup from "./components/pages/recruiter/auth/RecruiterSignup";
import LandingPage from "./components/dashboard/landingpageDashboard/LandingPage";
import RecruiterDashboard from "./components/dashboard/recruiterDashboard/RecruiterDashboard";
import PostedJobList from "./components/pages/recruiter/postedJobList/PostedJobList";
import UserDashboard from "./components/dashboard/userDashBoard/UserDashboard";
import UserState from "./context/recruiterDetails/RecruiterState";
import RecruiterState from "./context/recruiterDetails/RecruiterState";
import RecruiterLogin from "./components/pages/recruiter/auth/RecruiterLogin";
import Devider from "./components/pages/common/usertype/LoginUserType";
import { useEffect, useState } from "react";
import { getUserType } from "./guards/UserTypeGuard";;
import PostJob from "./components/pages/recruiter/PostJob/PostJob";
import RecruiterPricing from "./components/pages/recruiter/recruiterPricing/RecruiterPricing";
import PostedJobDashboard from "./components/pages/recruiter/PostedJobDashboard/PostedJobDashBoard";
import { DashboardApplicantList } from "./components/dashboard/recruiterDashboard/DashboardApplicantList/DashboardApplicantList";
import { User_JobDesc_Page } from "./components/shared/job_Description/User_JobDesc_Page";
import Dashboard from "./components/dashboard/recruiterDashboard/DashBoard_Layout/Dashboard";

const App = () => {
  const [userType$, setuserType$] = useState<string>("");
  useEffect(() => {
    const userType = getUserType();
    setuserType$(userType);
  })
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={`/${userType$}`} />} />
          <Route path="/recruiter" element={<Navigate to={'/recruiter/jobs'} />} />

          <Route path="/" element={<LandingPage />}>
            <Route path="/home" element={<Home />} />
            <Route path="/userType" element={<UserType />} />
            <Route path="/login/Type" element={<Devider />} />

            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobdescription" element={<User_JobDesc_Page />} />
          </Route>

          <Route path="/recruiter" element={
            <RecruiterState>
              <RecruiterDashboard />
            </RecruiterState>
          }>
            <Route path="/recruiter/signup" element={<RecruiterSignup />} />
            <Route path="/recruiter/login" element={<RecruiterLogin />} />
            <Route path="/recruiter/jobs" element={<PostedJobList />} />
            <Route path="/recruiter/postjob" element={<PostJob />} />
            <Route path="/recruiter/pricing" element={<RecruiterPricing/>} />
            {/* Recruiter Dashboard */}
            <Route path="/recruiter/dashboard" element={<Dashboard />}>
            <Route path="/recruiter/dashboard/job" element={<PostedJobDashboard />} />
            <Route path="/recruiter/dashboard/applicantList" element={<DashboardApplicantList />} />
            </Route>
          </Route>
          <Route path="/users" element={
            <UserState>
              <UserDashboard />
            </UserState>
          }>
            <Route path="/users/signup" element={<Signup />} />
            <Route path="/users/login" element={<Login />} />
          </Route>
        </Routes>
         
      </BrowserRouter>
    </div>
  )
}

export default App
