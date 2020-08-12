import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../components/common/layout"
import DanceStyles from "../components/DanceStyles/"

const Index = () => {
  return (
    <Layout>
      <SEO title="Classes" />
      <Container>
        <DanceStyles />
      </Container>
    </Layout>
  )
}

export default Index
