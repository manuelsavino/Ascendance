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

const Flamenco = () => {
  return (
    <Layout>
      <SEO title="Flamenco Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>Flamenco</Heading>
        <ScheduleViewer danceStyle="Flamenco" heading="Flamenco Schedule" />
      </Container>
    </Layout>
  )
}

export default Flamenco
