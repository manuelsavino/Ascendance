import React, { useState, useEffect } from "react"
import Logo from "../images/logoColor.svg"
import LogoWhite from "../images/logoWhite.svg"

import { Link } from "gatsby"

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false)
  const [isTops, setIsTop] = useState(true)

  useEffect(() => {
    function handleScroll() {
      const isTop = window.scrollY < 100
      if (window.scrollY > 100 && isTop != isTops) {
        setIsTop(false)
      } else if (window.scrollY < 100) {
        setIsTop(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const closeMobileMenu = () => {
    if (navOpen) {
      setNavOpen(false)
    }
  }

  const handleClick = () => {
    setNavOpen(!navOpen)
  }
  return (
    <div
      className={`nav-wrapper ${isTops ? "" : "scrollNav"} ${
        navOpen ? "scrollNav" : ""
      }`}
    >
      <nav className="navbar">
        <ul
          className={`nav d-only ${navOpen ? "mobile-nav scrollNavLinks" : ""}${
            isTops ? "" : " scrollNavLinks"
          }`}
        >
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <a href="#">Classes</a>
          </li>
        </ul>
        <img
          src={`${navOpen || !isTops ? Logo : LogoWhite}`}
          alt="Company Logo"
          className={`${!isTops ? "shrinkLog0" : "bigLogo"}`}
        />
        <div
          onClick={handleClick}
          className={`menu-toggle ${navOpen || !isTops ? "barScroll" : ""} ${
            navOpen ? "is-active" : ""
          }`}
          id="mobile-menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul
          className={`nav ${navOpen ? "mobile-nav scrollNavLinks" : ""}${
            isTops ? "" : " scrollNavLinks"
          }`}
        >
          <li className="nav-item m-only" onClick={closeMobileMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item m-only" onClick={closeMobileMenu}>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li className="nav-item m-only" onClick={closeMobileMenu}>
            <a href="#">Classes</a>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <a href="#">Other</a>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <a href="#">Summer</a>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
