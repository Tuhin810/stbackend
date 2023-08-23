
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/pages/home/Home";
import NavBar from "./components/shared/navbar/NavBar";
import Login from "./components/pages/auth/Login";

import UserDevider from "./components/pages/auth/UserDevider";
import Signup from "./components/pages/auth/Signup";

import Jobs from "./components/pages/jobs/Jobs";
import UserType from "./components/pages/usertype/UserType";
import RecruiterSignup from "./components/pages/recruiter/auth/RecruiterSignup";
import UserProfile from "./components/pages/Profile/UserProfile";
import DashBoard from "./components/pages/recruiter/auth/DashBoard";
import ABCD from "./components/pages/abcd/ABCD";
import LandingPage from "./components/dashboard/landingpageDashboard/LandingPage";
import CompanyRegistration from "./components/pages/company/registration/CompanyRegistration";
import RecruiterState from "./context/recruiterDetails/RecruiterState";
import RecruiterDashboard from "./components/dashboard/recruiterDashboard/RecruiterDashboard";
import PostedJobs from "./components/pages/recruiter/postedJobs/PostedJobs";
import UserState from "./context/userDetails/UserState";
import UserDashboard from "./components/dashboard/userDashBoard/UserDashboard";

import RecruiterLogin from "./components/pages/recruiter/auth/RecruiterLogin";
import Devider from "./components/pages/usertype/LoginUserType";

import Notification from "./components/pages/notifications/notifications";

function App() {


  return (
    <>


<div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LandingPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/userType" element={<UserType />} />
            <Route path="/login/Type" element={<Devider />} />
            <Route path="/userType" element={<Login />} />
            <Route path="/jobs" element={<Jobs />} />
             <Route path="/recruiter/dashboard" element={<> <NavBar /><DashBoard/></>}/ >
          <Route path="/profile" element={<> <NavBar /><UserProfile/></>}/ >
          <Route path="/profile/qualification" element={<> <NavBar />"hh"</>} />

          <Route path="/a" element={<><NavBar /><ABCD/> </>} />
            <Route path="/registerCompany" element={<CompanyRegistration />} />
          </Route>
          <Route path="/recruiter" element={
            <RecruiterState>
              <RecruiterDashboard />
            </RecruiterState>
          }>
            <Route path="/recruiter/signup" element={
              <RecruiterSignup />} />
            <Route path="/recruiter/login" element={<RecruiterLogin />} />

            <Route path="/recruiter/jobs" element={<PostedJobs />} />
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
    </>
  )
}




export default App
