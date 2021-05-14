import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "../components/common/layout"
import { Heading } from "../components/common/copy"
import Faqs from "../components/faqComponent"

const Faq = () => {
  return (
    <Layout>
      <Seo title="FAQ" />
      <Container>
        <Heading center>Frequently Asked Questions</Heading>
        <Faqs />
      </Container>
    </Layout>
  )
}

export default Faq
