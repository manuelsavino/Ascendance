import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Hero } from "../../components/Hero"
import { Container } from "../../components/common/layout"
import ScheduleViewer from "../../components/Schedule"
import {
  Heading,
  SubHeading,
  Paragraph,
  ListItem,
} from "../../components/common/copy"

const Contemporary = () => {
  return (
    <Layout>
      <Seo title="Contemporary Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>Contemporary</Heading>
        <ScheduleViewer
          danceStyle="Contemporary"
          heading="Contemporary Schedule"
        />
      </Container>
    </Layout>
  )
}

export default Contemporary
