import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFound from "../images/404.svg"
import { Container, Button } from "../components/common/layout"
import { Heading } from "../components/common/copy"
const NotFoundPage = () => (
  <Layout NotFound>
    <SEO title="404: Not found" />
    <Container
      style={{
        paddingTop: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={NotFound} style={{ width: "40%", margin: "20px" }} />
      <Heading
        size="2.5rem"
        style={{ marginBottom: "15px", lineHeight: "1.2" }}
      >
        Oopps... Sorry we can't find that page!
        <br />
        We did find this awesome link to try a free class!
      </Heading>
      <Button to="/free">Try a free class</Button>
    </Container>
  </Layout>
)

export default NotFoundPage
