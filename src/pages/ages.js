import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DanceStyles from "../components/DanceStyles"
import { Container } from "../components/common/layout"
export default function ages() {
  return (
    <Layout>
      <SEO title="Styles" />
      <Container fullWidth>
        <DanceStyles type="ages" />
      </Container>
    </Layout>
  )
}
