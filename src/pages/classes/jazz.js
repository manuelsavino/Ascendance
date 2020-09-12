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

const Jazz = () => {
  return (
    <Layout>
      <SEO title="Jazz Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>Jazz</Heading>
        <ScheduleViewer danceStyle="Jazz" heading="Jazz Schedule" />
      </Container>
    </Layout>
  )
}

export default Jazz
