
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/pages/home/Home";
import NavBar from "./components/shared/navbar/NavBar";
import Login from "./components/pages/auth/Login";
import title from './title';

import UserDevider from "./components/pages/auth/UserDevider";
import Signup from "./components/pages/auth/Signup";
import Footer from "./components/pages/footer/Footer";
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
<<<<<<< HEAD
import UserState from "./context/recruiterDetails/RecruiterState";
import RecruiterState from "./context/recruiterDetails/RecruiterState";
import titles from "./utils/titles";
import { Helmet } from 'react-helmet';
=======

>>>>>>> 733caf5a08f8ecdff01ae472a9cb5e9ed24c6d09


function App() {


  return (
    <>
<<<<<<< HEAD
    <Helmet>
        <title>{titles.home}</title>
      </Helmet>
=======
    


<div id="app">
>>>>>>> 733caf5a08f8ecdff01ae472a9cb5e9ed24c6d09
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LandingPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/userType" element={<UserType />} />
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
              <RecruiterSignup />
            } />
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
