import React, { useEffect } from "react"
// import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../styled/Hero"
import DanceStyles from "../components/DanceStyles/DanceStyles"

const IndexPage = () => {
  return (
    <Layout hero={true}>
      <SEO title="Home" />
      <Helmet
        script={[
          {
            type: "application/ld+json",
            innerHTML: `{"@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Ascendance Studio",
        "telephone":"+7865717778",
        "image": [
          "https://www.dancedoral.com/wp-content/uploads/2017/03/Ascendance-Studio-logo1.png"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10466 NW 31ST TERRACE",
          "addressLocality": "Doral",
          "addressRegion": "FL",
          "postalCode": "33172",
          "addressCountry": "US"
        }},`,
          },
        ]}
      />
      <Hero>
        <h1>Try a class for Free</h1>
      </Hero>

      <DanceStyles />
      {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    </Layout>
  )
}

export default IndexPage
