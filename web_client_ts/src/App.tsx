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
import Footer from "./components/pages/common/footer/Footer";
import RecruiterPricing from "./components/pages/recruiter/recruiterPricing/RecruiterPricing";

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
            {/* <Route path="/recruiter/jobDashboard" element={<PostedJobDashboard />} /> */}
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
        <Footer/>  
      </BrowserRouter>
    </div>
  )
}

export default App
