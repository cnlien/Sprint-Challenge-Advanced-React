import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { Navbar, NavbarBrand, Nav, NavItem, } from 'reactstrap';

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode("darkmode", "true");
  
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log("Ran toggleMode from Navbar.jsx and set state of darkMode to:", darkMode)
    document.body.classList.toggle("dark-mode");
  };

  const darkModeLabel = {
    marginLeft: 'auto',
    marginRight: '10px',
  };

  return (
    <div className="navigation">
      <Navbar className="navigation">
        <NavbarBrand href="/">Women's World Cup players</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem style={darkModeLabel}>Use Dark Mode:</NavItem>
            <NavItem className="dark-mode__toggle">
                <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;