import PropTypes from "prop-types"
import React from "react"
import NavColor from "./Nav/NavColor"
import "../components/Nav/nav.css"

const Header = ({ siteTitle, hero }) => <NavColor hero={hero} />

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
