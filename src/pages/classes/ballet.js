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

const Ballet = () => {
  return (
    <Layout>
      <SEO title="Ballet Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>Ballet</Heading>
        <ScheduleViewer danceStyle="Ballet" heading="Ballet Schedule" />
      </Container>
    </Layout>
  )
}

export default Ballet
