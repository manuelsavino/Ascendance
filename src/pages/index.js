import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../styled/Hero"
import DanceStyles from "../components/DanceStyles/DanceStyles"

const IndexPage = () => {
  return (
    <Layout hero={true}>
      <SEO title="Home" />
      <Hero>
        <h1>Try a class for Free</h1>
      </Hero>
      {/* <DanceStyles /> */}
    </Layout>
  )
}

export default IndexPage
