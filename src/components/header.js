import PropTypes from "prop-types"
import React from "react"
import NavBar from "./Nav/NavBar"
import "../components/Nav/nav.css"

const Header = ({ siteTitle, hero, user, logout }) => (
  <NavBar user={user} hero={hero} logout={logout} />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
