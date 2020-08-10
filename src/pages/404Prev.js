import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFound from "../images/404.svg"
import { Container, Button } from "../components/common/layout"
import { Heading } from "../components/common/copy"

const NotFoundImage = styled.img`
  width: 40%;
  margin: 20px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`

const NotFoundCopy = styled(Heading)`
  margin-bottom: 15px;
  line-height: 1.2;
  font-size: 1.9rem;
  padding: 0;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0;
  }
`

const NotFoundPage = () => (
  <Layout hidefreeflass>
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
      <NotFoundImage src={NotFound} />
      <NotFoundCopy>Oopps... Sorry we can't find that page!</NotFoundCopy>
      <NotFoundCopy>
        We did find this awesome link to try a free class!
      </NotFoundCopy>
      <Button to="/free">Try a free class</Button>
    </Container>
  </Layout>
)

export default NotFoundPage
