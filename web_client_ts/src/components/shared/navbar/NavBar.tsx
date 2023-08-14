import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logo } from '../../../assets/images';
import './navbar.css'
import CommonModal from '../modal/CommonModal';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary px-4" sticky="top">
      
      <Navbar.Brand href="#home" onClick={()=>navigate('/')}>
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/jobs')}}>Jobs</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/contact')}}>Contact</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About Us</Nav.Link>
            
          </Nav>
          <Nav>
            <button className='btn btn-outline-primary' onClick={()=>{navigate('/login')}}>LogIn</button>
          </Nav>
        </Navbar.Collapse>

       
      
    </Navbar>
  );
}

export default NavBar;