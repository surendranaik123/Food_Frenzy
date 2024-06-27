import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../Styles/Header.css";
import img from "../../Assets/logo.png";
import { Dropdown, DropdownItem } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import personlogo from "../../Assets/person-circle.svg";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/veg", label: "Veg" },
    { href: "/nonveg", label: "Non-Veg" },
    { href: "/beve", label: "Beverages" },
    { href: "/offers", label: "Offers" },
    { href: "/About", label: "About Us" },
  ];

  return (
    <header>
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 text-dark text-decoration-none"
      >
        <img src={img} alt="logo" className="logo-f" />
        <span className="brand-name">Food-Frenzy</span>
      </a>
      <nav ref={navRef}>
        {navItems.map((item) => (
          <li className="nav-item" key={item.href}>
            <a href={item.href} className="nav-link-custom">
              {item.label}
            </a>
          </li>
        ))}
        <li className="nav-item user-menu">
          <img src={personlogo} alt="User" className="user-logo" />
          <NavDropdown>
            <DropdownItem href="/signin" className="nav-link-custom">
              Login with user credentials
            </DropdownItem>
            <hr />
            <DropdownItem className="nav-link-custom">MY Cart</DropdownItem>
            <hr />
            <DropdownItem className="nav-link-custom">Settings</DropdownItem>
            <hr />
            <DropdownItem className="nav-link-custom">Logout</DropdownItem>
          </NavDropdown>
        </li>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-open-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
