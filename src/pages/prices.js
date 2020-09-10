import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pricing from "../components/Pricing"
import { Button } from "../components/common/layout"

import { Container } from "../components/common/layout"
export default function ages() {
  return (
    <Layout>
      <SEO title="Pricing" />
      <Container>
        <Pricing />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Button to="/schedule">See Our Schedule</Button>
        </div>
      </Container>
    </Layout>
  )
}
