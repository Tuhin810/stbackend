import React from 'react'
import Nav from './components/shared/navbar/NavBar';
import LandingPage from './components/dashboard/landingpageDashboard/LandingPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/pages/forms/auth/LogInForm/LoginForm';
import UserState from './context/userDetails/UserState';
import RegistrationForm from './components/pages/forms/auth/RegistrationForm/RegistrationForm';



const App = () => {
  return (
    <div className="app">
      <UserState>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/signup' element={<RegistrationForm />} />
          </Routes>
        </Router>
      </UserState>
    </div>
  )
}

export default App
