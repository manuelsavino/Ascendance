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

const Ballroom = () => {
  return (
    <Layout>
      <SEO title="Ballroom Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>Ballroom</Heading>
        <ScheduleViewer danceStyle="Ballroom" heading="Ballroom Schedule" />
      </Container>
    </Layout>
  )
}

export default Ballroom
