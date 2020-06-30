import React, { useEffect } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../styled/Hero"
import Helmet from "react-helmet"

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

const PaperForm = () => {
  useEffect(() => {
    addScript("https://paperform.co/__embed")
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <Hero></Hero>
      <div data-paperform-id="vnhsjqfa"></div>
      {/* <Helmet>
        <script
          async={false}
          src="https://paperform.co/__embed"
          type="text/javascript"
        />
      </Helmet> */}
    </Layout>
  )
}

export default PaperForm
