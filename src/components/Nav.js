import React, { useState, useEffect } from "react"
import Logo from "../images/logo.png"
import { Link } from "gatsby"

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false)
  const [isTops, setIsTop] = useState(true)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100
      console.log("check", isTop)
      console.log("state", isTops)
      if (isTop !== isTops) {
        console.log("in check")
        setIsTop(isTops => isTop)
      }
    })
  }, [])
  const handleClick = () => {
    setNavOpen(!navOpen)
  }
  return (
    <div className={`nav-wrapper ${isTops ? "" : "scrollNav"}`}>
      <nav className="navbar">
        <img src={Logo} alt="Company Logo" />
        <div
          onClick={handleClick}
          className={`menu-toggle ${isTops ? "" : "barScroll"}`}
          id="mobile-menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul
          className={`nav ${navOpen ? "mobile-nav" : ""}${
            isTops ? "" : " scrollNavLinks"
          }`}
        >
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Schedule</a>
          </li>
          <li className="nav-item">
            <a href="#">Classes</a>
          </li>
          <li className="nav-item">
            <a href="#">Summer</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
