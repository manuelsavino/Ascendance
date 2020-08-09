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
      <SEO title="Home" />
      <Container>
        <Heading>Ballet</Heading>
        <ScheduleViewer style="Ballet" heading="Ballet Schedule" />
      </Container>
    </Layout>
  )
}

export default Ballet
