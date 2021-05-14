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

const Acrobatics = () => {
  return (
    <Layout>
      <Seo title="Acrobatics Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>Acrobatics</Heading>
        <ScheduleViewer danceStyle="Acrobatics" heading="Acrobatics Schedule" />
      </Container>
    </Layout>
  )
}

export default Acrobatics
