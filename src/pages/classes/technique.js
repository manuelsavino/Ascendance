import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { Hero } from "../../components/Hero"
import { Container } from "../../components/common/layout"
import ScheduleViewer from "../../components/Schedule"
import { Heading } from "../../components/common/copy"

const Technique = () => {
  return (
    <Layout>
      <Seo title="Technique Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>Technique</Heading>
        <ScheduleViewer danceStyle="Technique" heading="Technique Schedule" />
      </Container>
    </Layout>
  )
}

export default Technique
