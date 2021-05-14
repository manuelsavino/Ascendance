import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ScheduleViewer from "../components/Schedule"
import { Heading } from "../components/common/copy"
import { Container } from "../components/common/layout"

const Virtual = () => {
  return (
    <Layout>
      <Seo title="Schedule" />
      <Container>
        <Heading>Virtual Schedule</Heading>
        <ScheduleViewer virtual />
      </Container>
    </Layout>
  )
}

export default Virtual
