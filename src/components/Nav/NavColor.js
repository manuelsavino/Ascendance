import React, { useState, useEffect } from "react"
import Logo from "../../images/aslogocolor.svg"
import LogoWhite from "../../images/logoWhite.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

import { Link } from "gatsby"

export default function NavColor({ hero }) {
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
    <>
      <div
        className={`nav-wrapper  ${isTops ? "" : "scrollNav"} ${
          !hero || navOpen ? "scrollNav" : ""
        }`}
      >
        <div className="contactBar">
          <div className="contactBarInner">
            <a className="phoneNumber" href="tel:786-571-7778">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                style={{ marginRight: "5px" }}
              />
              786-571-7778
            </a>
            <span className="sociaMediaIcons">
              <a
                className="socialMedia facebookIcon"
                href="https://www.facebook.com/ascendanceMiami"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                className="socialMedia isntagramIcon"
                href="https://www.instagram.com/ascendanceMiami"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                className="socialMedia youtubeIcon"
                href="https://www.youtube.com/c/AscendanceStudio/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </span>
          </div>
        </div>
        <nav className="navbar">
          <ul
            className={`nav d-only ${!isTops || !hero ? "scrollNavLinks" : ""}`}
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
          <Link to="/">
            <img
              src={`${!hero || navOpen || !isTops ? Logo : LogoWhite}`}
              alt="Company Logo"
            />
          </Link>
          <div
            onClick={handleClick}
            className={`menu-toggle ${
              !hero || navOpen || !isTops ? "scrollBar" : ""
            } ${navOpen ? "is-active" : ""}`}
            id="mobile-menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`nav ${navOpen ? "mobile-nav scrollNavLinks" : ""}
        ${!hero || !isTops ? "scrollNavLinks" : ""}
        `}
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
    </>
  )
}

NavColor.defaultProps = {
  hero: false,
}
