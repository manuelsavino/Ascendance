import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DanceStyles from "../components/DanceStyles"
import { Container } from "../components/common/layout"
export default function styles() {
  return (
    <Layout>
      <SEO title="Styles" />
      <Container>
        <DanceStyles type="styles" headline="We Offer a Variety of Styles" />
      </Container>
    </Layout>
  )
}
