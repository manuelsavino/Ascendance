import PropTypes from "prop-types"
import React from "react"
import NavColor from "./NavColor"
import "./nav.css"

const Header = ({ siteTitle, hero }) => <NavColor hero={hero} />

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
