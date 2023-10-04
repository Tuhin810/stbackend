import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./components/pages/common/home/Home";
import RecruiterSignUp from "./components/pages/recruiter/auth/RecruiterSignUp/RecruiterSignUp";
import LandingPage from "./components/pages/dashboard/landingpageDashboard/LandingPage";
import RecruiterDashboard from "./components/pages/dashboard/recruiterDashboard/RecruiterDashboard";
import PostedJobList from "./components/pages/recruiter/postedJobList/PostedJobList";
import { useContext, useEffect, useState } from "react";
import { getUserType, guard } from "./guards/UserTypeGuard";
import PostJob from "./components/pages/recruiter/PostJob/PostJob";
import RecruiterPricing from "./components/pages/recruiter/recruiterPricing/RecruiterPricing";
import PostedJobDashboard from "./components/pages/recruiter/PostedJobDashboard/PostedJobDashBoard";
import ApplicantDashboard from "./components/pages/dashboard/applicantDashBoard/ApplicantDashboard";
import ApplicantProfile from "./components/pages/applicant/Profile/UserProfile";
import { globalContext } from "./context/GlobalDetails/GlobalContext";
import CompanyRegistration from "./components/pages/company/registration/CompanyRegistration";
import ApplicantResume from "./components/pages/applicant/applicantResume/ApplicantResume";
import SharedResume from "./components/pages/common/ResumeShare.tsx/SharedResume";
import { JobsPage } from "./components/pages/applicant/JobsPage/JobsPage";
import { ApplicantPerformance } from "./components/pages/applicant/applicantPerformence/ApplicantPerformance";
import ApplicantLogin from "./components/pages/applicant/auth/ApplicantLogin/ApplicantLogin";
import ApplicantSignup from "./components/pages/applicant/auth/ApplicantSignup/ApplicantSignup";
import RecruiterLogin from "./components/pages/recruiter/auth/RecruiterLogin/RecruiterLogin";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from "./components/pages/common/Contact_us/Contact";
import About from "./components/pages/common/About_us/About";


const App = () => {
  const [userType$, setuserType$] = useState<string>("");
  const { loggedIn } = useContext(globalContext);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    const userType = getUserType();
    setuserType$(userType);
    if (userType != '') {
      loggedIn({ type: "refresh_page", userType: userType });
    }
  }, []);
  return (
    <div id="app" className="bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={`/${userType$}`} />} />
          <Route path="/recruiter" element={<Navigate to={(!guard()) ? '/recruiter/jobs' : '/applicant'} />} />
          <Route path="/applicant" element={<Navigate to={(!guard()) ? '/applicant/profile' : '/recruiter'} />} />
          <Route path="/resume/:id" element={<SharedResume />} />
          <Route path="/newCompany" element={<CompanyRegistration />} />
          {/* landing page */}
          <Route path="/" element={<LandingPage />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Contact />} />
          </Route>

          {/* recruiter */}
          <Route path="/recruiter/login" element={< RecruiterLogin />} />
          <Route path="/recruiter/signup" element={<RecruiterSignUp />} />

          {/* Recruiter Dashboard */}
          <Route path="/recruiter" element={<RecruiterDashboard />}>
            <Route path="/recruiter/jobs" element={<PostedJobList />} />
            <Route path="/recruiter/postjob" element={<PostJob />} />
            <Route path="/recruiter/pricing" element={<RecruiterPricing />} />
            <Route path="/recruiter/jobDetails/:jobId" element={<PostedJobDashboard />} />
          </Route>

          <Route path="/applicant/signup" element={<ApplicantSignup />} />
          <Route path="/applicant/login" element={<ApplicantLogin />} />
          <Route path="/profile/details/:id" element={<ApplicantProfile />} />

          {/* applicant dashboard */}
          <Route path="/applicant" element={<ApplicantDashboard />}>
            <Route path="/applicant/profile/" element={<ApplicantProfile />} />
            <Route path="/applicant/resume/" element={<ApplicantResume />} />
            <Route path="/applicant/RecommendedJobs/" element={<JobsPage />} />
            <Route path="/applicant/performance/" element={<ApplicantPerformance />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
