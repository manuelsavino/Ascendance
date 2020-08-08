import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/Hero/hero"
import DanceStyles from "../components/DanceStyles/DanceStyles"

const Index = () => {
  return (
    <Layout hero={true}>
      <SEO title="Home" />
      <Hero>
        <h1>Try a class for Free</h1>
      </Hero>
      <DanceStyles />
    </Layout>
  )
}

export default Index
