import React, { useState } from "react"
import Logo from "../images/logo.png"
import { Link } from "gatsby"

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false)

  const handleClick = () => {
    setNavOpen(!navOpen)
  }
  return (
    <div className="nav-wrapper">
      <nav className="navbar">
        <img src={Logo} alt="Company Logo" />
        <div onClick={handleClick} className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav ${navOpen ? "mobile-nav" : ""}`}>
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Work</a>
          </li>
          <li className="nav-item">
            <a href="#">Careers</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
