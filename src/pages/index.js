import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Hero } from "../styled/Hero"
import DanceStyles from "../components/DanceStyles"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <h1>Try a class for Free</h1>
    </Hero>
    <DanceStyles />
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
