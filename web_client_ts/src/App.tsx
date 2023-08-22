

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
import Jobs from "./components/pages/jobs/jobCard/jobList";
import UserType from "./components/pages/usertype/UserType";
import RecruiterSignup from "./components/pages/recruiter/auth/RecruiterSignup";
import LandingPage from "./components/dashboard/landingpageDashboard/LandingPage";
import RecruiterDashboard from "./components/dashboard/recruiterDashboard/RecruiterDashboard";
import PostedJobs from "./components/pages/recruiter/postedJobs/PostedJobs";
import UserDashboard from "./components/dashboard/userDashBoard/UserDashboard";
import UserState from "./context/recruiterDetails/RecruiterState";
import RecruiterState from "./context/recruiterDetails/RecruiterState";
import titles from "./utils/titles";
import { Helmet } from 'react-helmet';


function App() {


  return (
    <>
    <Helmet>
        <title>{titles.home}</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LandingPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/userType" element={<UserType />} />
            <Route path="/jobs" element={<Jobs />} />
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
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
