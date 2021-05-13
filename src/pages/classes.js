import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "../components/common/layout"
import DanceStyles from "../components/DanceStyles/"

const Index = () => {
  return (
    <Layout>
      <Seo title="Classes" />
      <Container>
        <DanceStyles />
      </Container>
    </Layout>
  )
}

export default Index
