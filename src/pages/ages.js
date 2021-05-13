import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DanceStyles from "../components/DanceStyles"
import { Container } from "../components/common/layout"
export default function ages() {
  return (
    <Layout>
      <Seo title="Ages" />
      <Container>
        <DanceStyles type="ages" />
      </Container>
    </Layout>
  )
}
