import React, { useEffect } from "react"
// import { Link } from "gatsby"
import lottie from "lottie-web"
import animation from "../images/team.json"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../styled/Hero"
import Helmet from "react-helmet"

const PaperForm = () => {
  return (
    <Layout>
      <Helmet>
        <script
          async={false}
          src="https://paperform.co/__embed"
          type="text/javascript"
        />
      </Helmet>
      <SEO title="Home" />
      <Hero></Hero>
      <div data-prefill-inherit="1" data-paperform-id="vnhsjqfa"></div>
    </Layout>
  )
}

export default PaperForm
