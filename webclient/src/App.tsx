import React from 'react'
import Nav from './components/shared/navbar/NavBar';
import LandingPage from './components/dashboard/landingpageDashboard/LandingPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/pages/forms/LoginForm';



const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
