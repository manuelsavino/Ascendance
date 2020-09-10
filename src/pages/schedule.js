import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScheduleViewer from "../components/Schedule"
import { Heading } from "../components/common/copy"
import { Container } from "../components/common/layout"
import Pricing from "../components/Pricing"

const Schedule = () => {
  return (
    <Layout>
      <SEO title="Schedule" />
      <Container fullWidth>
        <Heading>Schedule</Heading>
        <ScheduleViewer />
      </Container>
      <Container style={{ margin: "auto" }}>
        <Pricing />
      </Container>
    </Layout>
  )
}

export default Schedule
