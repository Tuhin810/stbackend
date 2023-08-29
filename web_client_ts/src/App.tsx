import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./components/pages/common/home/Home";
import Login from "./components/pages/applicant/auth/Login/Login";
import Signup from "./components/pages/applicant/auth/SignUp/Signup";
import RecruiterSignup from "./components/pages/recruiter/auth/RecruiterSignup";
import LandingPage from "./components/dashboard/landingpageDashboard/LandingPage";
import RecruiterDashboard from "./components/dashboard/recruiterDashboard/RecruiterDashboard";
import PostedJobList from "./components/pages/recruiter/postedJobList/PostedJobList";
import RecruiterLogin from "./components/pages/recruiter/auth/RecruiterLogin/RecruiterLogin";
import { useEffect, useState } from "react";
import { getUserType } from "./guards/UserTypeGuard";;
import PostJob from "./components/pages/recruiter/PostJob/PostJob";
import RecruiterPricing from "./components/pages/recruiter/recruiterPricing/RecruiterPricing";
import PostedJobDashboard from "./components/pages/recruiter/PostedJobDashboard/PostedJobDashBoard";
import { DashboardApplicantList } from "./components/dashboard/recruiterDashboard/DashboardApplicantList/DashboardApplicantList";
import { User_JobDesc_Page } from "./components/shared/job_Description/User_JobDesc_Page";
import Dashboard from "./components/dashboard/recruiterDashboard/DashBoard_Layout/Dashboard";
import JobDescription from "./components/shared/job_Description/JobDescription/JobDescription";
import ApplicantDashboard from "./components/dashboard/applicantDashBoard/ApplicantDashboard";
import ApplicantProfile from "./components/pages/applicant/Profile/UserProfile";
import Resume from "./components/pages/applicant/resume/Resume";

const App = () => {
  const [userType$, setuserType$] = useState<string>("");
  useEffect(() => {
    const userType = getUserType();
    setuserType$(userType);
  })
  return (
    <div id="app" className="bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={`/${userType$}`} />} />
          <Route path="/recruiter" element={<Navigate to={'/recruiter/jobs'} />} />
          <Route path="/applicant" element={<Navigate to={'/applicant/profile'} />} />
          {/* landing page */}
          <Route path="/" element={<LandingPage />}>
            <Route path="/home" element={<Home />} />
            <Route path="/jobdescription" element={<User_JobDesc_Page />} />
          </Route>
          {/* recruiter dashboard */}
          <Route path="/recruiter/login" element={<RecruiterLogin />} />
          <Route path="/recruiter/signup" element={<RecruiterSignup />} />
          {/* Recruiter Dashboard */}
          <Route path="/recruiter" element={<RecruiterDashboard />}>
            <Route path="/recruiter/jobs" element={<PostedJobList />} />
            <Route path="/recruiter/postjob" element={<PostJob />} />
            <Route path="/recruiter/pricing" element={<RecruiterPricing />} />
            <Route path="/recruiter/jobDetails/:jobId" element={<JobDescription />} />
            <Route path="/recruiter/jobDashboard" element={<PostedJobDashboard />} />
          </Route>
          <Route path="/applicant/signup" element={<Signup />} />
          <Route path="/applicant/login" element={<Login />} />
          <Route path="/profile/details/:id" element={<ApplicantProfile />} />
          {/* applicant dashboard */}
          <Route path="/applicant" element={<ApplicantDashboard />}>
            <Route path="/applicant/profile/" element={<ApplicantProfile />} />
            <Route path="/applicant/resume/" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
