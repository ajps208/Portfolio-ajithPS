import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import logo from '../images/logo.png';

function BasicExample({ isDarkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }

  return (
    <Navbar expand="lg" className={`${
      isDarkMode ? 'navdark' : 'nav'
    } border-0`} /* Add border-0 class to remove the border */>
      <Container>
        <Navbar.Brand href="#home"><img className='img-fluid w-25' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-0' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="navLink mx-4 " href="#home"><span className={isDarkMode ? 'navp' : 'navpdark'}>Home</span></Nav.Link>
            <Nav.Link className="navLink mx-4" href="#about"><span className={isDarkMode ? 'navp' : 'navpdark'}>About</span></Nav.Link>
            <Nav.Link className="navLink mx-4" href="#projects"><span className={isDarkMode ? 'navp' : 'navpdark'}>Projects</span></Nav.Link>
            <Nav.Link className="navLink mx-4" href="#contacts"><span className={isDarkMode ? 'navp' : 'navpdark'}>Contacts</span></Nav.Link>
            <Nav.Link className="navLink mx-4" href="#home">
              <i onClick={toggleDarkMode} className={isDarkMode ? 'fa-solid fa-sun text-light' : 'fa-solid fa-moon text-dark'}></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;