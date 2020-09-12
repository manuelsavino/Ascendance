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

const Lyrical = () => {
  return (
    <Layout>
      <SEO title="Lyrical Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>Lyrical</Heading>
        <ScheduleViewer danceStyle="Lyrical" heading="Lyrical Schedule" />
      </Container>
    </Layout>
  )
}

export default Lyrical
