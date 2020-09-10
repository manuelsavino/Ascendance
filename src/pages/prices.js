import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pricing from "../components/Pricing"

import { Container } from "../components/common/layout"
export default function ages() {
  return (
    <Layout>
      <SEO title="Styles" />
      <Container>
        <Pricing></Pricing>
      </Container>
    </Layout>
  )
}
