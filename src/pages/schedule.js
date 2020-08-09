import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScheduleViewer from "../components/Schedule"
import { Container } from "../components/common/layout"

const Schedule = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <ScheduleViewer />
      </Container>
    </Layout>
  )
}

export default Schedule
