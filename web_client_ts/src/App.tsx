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
import { getUserType } from "./guards/UserTypeGuard";
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
import Pricing from "./components/shared/pricing/Pricing";
import AdminDashBoard from "./components/pages/admin/dashboard/AdminDashBoard";
import AllJobList from "./components/pages/admin/jobs/jobList/AllJobList";
import ResumeView from "./components/pages/recruiter/resumeView/ResumeView";
import ProfileCard from "./components/pages/applicant/profile_card/ProfileCard";
import EmployerChat from "./components/pages/recruiter/chat/EmployerChat";
import ApplicantChat from "./components/pages/applicant/chat/ApplicantChat";
import ApplicantInbox from "./components/pages/applicant/applicantInbox/ApplicantInbox";
import ApplicantForgottenPassword from "./components/pages/applicant/auth/ApplicantForgetPassword/ApplicantForgottenPassword";
import { SignUp } from "./components/pages/common/auth/signUp/SignUp";


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
          <Route path="/employer" element={<Navigate to={'/employer/jobs'} />} />
          <Route path="/jobSeeker" element={<Navigate to={'/jobSeeker/profile'} />} />
          <Route path="/admin" element={<Navigate to={'/admin/jobs'} />} />
          <Route path="/resume/:id" element={<SharedResume jobApplied={true} />} />
          <Route path="/newCompany" element={<CompanyRegistration />} />
          {/* landing page */}
          <Route path="/" element={<LandingPage />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Contact />} />
          </Route>

          <Route path="/signup" element={< SignUp />} />
          {/* recruiter */}
          <Route path="/employer/login" element={< RecruiterLogin />} />
          <Route path="/employer/signup" element={<RecruiterSignUp />} />

          {/* Recruiter Dashboard */}
          <Route path="/employer" element={<RecruiterDashboard />}>
            <Route path="/employer/jobs" element={<PostedJobList />} />
            <Route path="/employer/applicant-resume/:id/:jobId" element={<ResumeView />} />
            <Route path="/employer/postjob" element={<PostJob />} />
            <Route path="/employer/chat/:applicantId" element={<EmployerChat />} />
            <Route path="/employer/pricing" element={<RecruiterPricing />} />
            <Route path="/employer/jobDetails/:jobId" element={<PostedJobDashboard />} />
          </Route>

          <Route path="/jobSeeker/signup" element={<ApplicantSignup />} />
          <Route path="/jobSeeker/login" element={<ApplicantLogin />} />
          <Route path="/jobSeeker/forgetpass" element={<ApplicantForgottenPassword />} />
          <Route path="/profile/details/:id" element={<ApplicantProfile />} />

          {/* applicant dashboard */}
          <Route path="/jobSeeker" element={<ApplicantDashboard />}>
            <Route path="/jobSeeker/profile/" element={<ApplicantProfile />} />
            <Route path="/jobSeeker/Card/" element={<ProfileCard />} />
            <Route path="/jobSeeker/resume/" element={<ApplicantResume />} />
            <Route path="/jobSeeker/chat/:recruiterId" element={<ApplicantChat />} />
            <Route path="/jobSeeker/inbox" element={<ApplicantInbox />} />
            <Route path="/jobSeeker/matchedJobs/" element={<JobsPage />} />
            <Route path="/jobSeeker/performance/" element={<ApplicantPerformance />} />
          </Route>

          <Route path="/admin" element={<AdminDashBoard />}>
            <Route path="/admin/jobs" element={<AllJobList />} />
            <Route path="/admin/recruiters" element={<PostJob />} />
            <Route path="/admin/applicants" element={<RecruiterPricing />} />
            <Route path="/admin/jobDetails/:jobId" element={<PostedJobDashboard />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
