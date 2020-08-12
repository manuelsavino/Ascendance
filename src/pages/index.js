import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/Hero"
import DanceStyles from "../components/DanceStyles/"

const Index = () => {
  return (
    <Layout hero>
      <SEO title="Home" />
      <Hero parallax gradient>
        <h1>Try a class for Free</h1>
      </Hero>
      <DanceStyles />
    </Layout>
  )
}

export default Index
