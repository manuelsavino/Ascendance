import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DanceStyles from "../components/DanceStyles"
import { Container } from "../components/common/layout"
export default function styles() {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <DanceStyles />
      </Container>
    </Layout>
  )
}
