import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../components/common/layout"
import { Heading, SubHeading } from "../components/common/copy"
import Faqs from "../components/faqComponent"

const Faq = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Heading>Frequently Asked Questions</Heading>
        <Faqs />
      </Container>
    </Layout>
  )
}

export default Faq
