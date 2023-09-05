import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./components/pages/common/home/Home";
import Login from "./components/pages/applicant/auth/Login/Login";
import Signup from "./components/pages/applicant/auth/SignUp/Signup";
import RecruiterSignup from "./components/pages/recruiter/auth/RecruiterSignUp/RecruiterSignup";
import LandingPage from "./components/dashboard/landingpageDashboard/LandingPage";
import RecruiterDashboard from "./components/dashboard/recruiterDashboard/RecruiterDashboard";
import PostedJobList from "./components/pages/recruiter/postedJobList/PostedJobList";
import RecruiterLogin from "./components/pages/recruiter/auth/RecruiterLogin/RecruiterLogin";
import { useContext, useEffect, useState } from "react";
import { getUserType } from "./guards/UserTypeGuard";
import PostJob from "./components/pages/recruiter/PostJob/PostJob";
import RecruiterPricing from "./components/pages/recruiter/recruiterPricing/RecruiterPricing";
import PostedJobDashboard from "./components/pages/recruiter/PostedJobDashboard/PostedJobDashBoard";

import JobDescription from "./components/shared/job_Description/JobDescription/JobDescription";
import ApplicantDashboard from "./components/dashboard/applicantDashBoard/ApplicantDashboard";
import ApplicantProfile from "./components/pages/applicant/Profile/UserProfile";
import ApplicantInvitedJobList from "./components/pages/applicant/invitedJobList/ApplicantInvitedJobList";
import { globalContext } from "./context/GlobalDetails/GlobalContext";
import CompanyRegistration from "./components/pages/company/registration/CompanyRegistration";
import ApplicantResume from "./components/pages/applicant/applicantResume/ApplicantResume";
import SharedResume from "./components/pages/common/ResumeShare.tsx/SharedResume";

const App = () => {
  const [userType$, setuserType$] = useState<string>("");
  const {loggedIn} =useContext(globalContext);
  useEffect(() => {
    const userType = getUserType();
    setuserType$(userType);
    if(userType!=''){
      loggedIn({type:"refresh_page",userType:userType});
    }
  },[]);
  return (
    <div id="app" className="bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={`/${userType$}`} />} />
          <Route path="/recruiter" element={<Navigate to={'/recruiter/jobs'} />} />
          <Route path="/applicant" element={<Navigate to={'/applicant/profile'} />} />
          <Route path="/resume/:id" element={<SharedResume/>} />
          {/* landing page */}
          <Route path="/" element={<LandingPage />}>
            <Route path="/home" element={<Home />} />
          </Route>
          
          {/* recruiter */}
          <Route path="/recruiter/login" element={<RecruiterLogin />} />
          <Route path="/recruiter/signup" element={<RecruiterSignup />} />
          <Route path="/newCompany" element={<CompanyRegistration />} />
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
          <Route path="/profile/details/:id" element={<ApplicantProfile/>} />

          {/* applicant dashboard */}
          <Route path="/applicant" element={<ApplicantDashboard />}>
            <Route path="/applicant/profile/" element={<ApplicantProfile/>} />
            <Route path="/applicant/resume/" element={<ApplicantResume />} />
            <Route path="/applicant/invitedjobs/" element={<ApplicantInvitedJobList />} />
            <Route path="/applicant/jobDetails/:jobId" element={<JobDescription />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
