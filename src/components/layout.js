import React from "react"
import PropTypes from "prop-types"
import Global from "./Global/Global"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer/Footer"
import "./layout.css"

const Layout = ({ children, hero, hidefreeflass }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header hero={hero} siteTitle={data.site.siteMetadata.title} />
      <Global />
      <main className={!hero ? "mainMargin" : ""}>{children}</main>
      <Footer hidefreeflass={hidefreeflass} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
