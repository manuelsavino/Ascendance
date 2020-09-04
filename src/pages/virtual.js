import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScheduleViewer from "../components/Schedule"
import { Heading } from "../components/common/copy"
import { Container } from "../components/common/layout"

const Virtual = () => {
  return (
    <Layout>
      <SEO title="Schedule" />
      <Container>
        <Heading>Schedule</Heading>
        <ScheduleViewer virtual />
      </Container>
    </Layout>
  )
}

export default Virtual
