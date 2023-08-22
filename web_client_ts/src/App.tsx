
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
import Footer from "./components/pages/footer/Footer";
import Jobs from "./components/pages/jobs/Jobs";
import UserType from "./components/pages/usertype/UserType";
import RecruiterSignup from "./components/pages/recruiter/auth/RecruiterSignup";
import UserProfile from "./components/pages/Profile/UserProfile";
import DashBoard from "./components/pages/recruiter/auth/DashBoard";
import ABCD from "./components/pages/abcd/ABCD";



function App() {


  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<> <NavBar /><Home /> <Footer /></>} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/userType" element={<> <NavBar /><UserType /></>} />
          <Route path="/recruiter/signup" element={<RecruiterSignup />} />
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/jobs" element={<> <NavBar /><Jobs /></>} />
          <Route path="/recruiter/dashboard" element={<> <NavBar /><DashBoard/></>}/ >
          <Route path="/profile" element={<> <NavBar /><UserProfile/></>}/ >
          <Route path="/profile/qualification" element={<> <NavBar />"hh"</>} />

          <Route path="/a" element={<><NavBar /><ABCD/> </>} />
       
        </Routes>
       
      </BrowserRouter>

    </>
  )
}




export default App
