import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Hero } from "../../components/Hero"
import { Container } from "../../components/common/layout"
import ScheduleViewer from "../../components/Schedule"
import {
  Heading,
  SubHeading,
  Paragraph,
  ListItem,
} from "../../components/common/copy"

const Technique = () => {
  return (
    <Layout>
      <SEO title="Technique Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>Technique</Heading>
        <ScheduleViewer danceStyle="Technique" heading="Technique Schedule" />
      </Container>
    </Layout>
  )
}

export default Technique
