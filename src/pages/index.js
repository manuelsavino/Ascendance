import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/Hero"
import Instagram from "../components/Instagram"
import { Button } from "../components/common/layout"

import DanceStyles from "../components/DanceStyles/"

const Index = () => {
  return (
    <Layout hero>
      <SEO title="Home" />
      <Hero parallax gradient>
        {/* <h1>Try a class for Free</h1> */}
        <Button to="/schedule" style={{ marginRight: "10px" }}>
          See Our Schedule
        </Button>
        <Button to="/free">Click Here to Try a Free Class</Button>
      </Hero>
      {/* <DanceStyles /> */}
      <Instagram />
    </Layout>
  )
}

export default Index
