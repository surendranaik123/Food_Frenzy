import React, { useState } from 'react';
import img from '../../Assets/logo.png';
import personlogo from '../../Assets/person-circle.svg';
import '../../Styles/global.css';
import { Dropdown, DropdownItem } from 'react-bootstrap';
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsList, BsX } from 'react-icons/bs'; // Import the menu and close icons

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        <header className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 text-dark text-decoration-none">
            <img src={img} alt='logo' style={{ height: "100px", width: "100px" }} />
            <span className="fs-4" style={{ fontFamily: "Scheherazade New", fontStyle: "normal", fontWeight: "700", fontSize: "35px", lineHeight: "45px", color: "#000000", marginLeft: "10px" }}>
              Food-Frenzy
            </span>
          </a>

        

          <ul className={`nav nav-pills ${menuOpen ? 'show' : ''}`}>
            <li className="nav-item">
              <a href="/home" className="nav-link-custom" aria-current="page">Home</a>
            </li>
            <li className="nav-item">
              <a href="/veg" className="nav-link-custom">Veg</a>
            </li>
            <li className="nav-item">
              <a href="/nonveg" className="nav-link-custom">Non-Veg</a>
            </li>
            <li className="nav-item">
              <a href="/beve" className="nav-link-custom">Beverages</a>
            </li>
            <li className="nav-item">
              <a href="/offers" className="nav-link-custom">Offers</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link-custom">About Us</a>
            </li>

            <li className="nav-item" style={{ display: "flex", marginLeft: "140px" }}>
              <img src={personlogo} alt='personlogo' style={{ height: "35px", width: "35px", marginTop: "0px" }} />
              <NavDropdown style={{ marginTop: "0px" }}>
                <DropdownItem href="/login" className="nav-link-custom">
                  Login with user credentials
                </DropdownItem>
                <hr />
                <DropdownItem className="nav-link-custom">
                  MY Cart
                </DropdownItem>
                <hr />
                <DropdownItem className="nav-link-custom">
                  Setting
                </DropdownItem>
                <hr />
                <DropdownItem className="nav-link-custom">
                  Logout
                </DropdownItem>
              </NavDropdown>

              <div className="menu-icon" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
            {menuOpen ? <BsX /> : <BsList />}
          </div>
            </li>
          </ul>

          
        </header>
      </div>
    </div>
  );
}

export default Header;
