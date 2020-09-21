import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import DanceStyles from "../components/DanceStyles/"
import { Hero } from "../components/Hero"
import {
  Button,
  Container,
  // VideoContainer,
  // SingleVideoCotnainer,
} from "../components/common/layout"
// import googlelogo from "../images/googleLogo.svg"

// import { SubHeading } from "../components/common/copy"

const LiveButton = styled(Button)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

const Index = () => {
  return (
    <Layout hero>
      <SEO title="Dance Classes in Doral,Florida" />
      <Hero parallax gradient>
        {/* <h1>Try a class for Free</h1> */}
        <Button to="/schedule" style={{ marginRight: "10px" }}>
          See Our Schedule
        </Button>
        <Button to="/free">Click Here to Try a Free Class</Button>
        <LiveButton to="/live">Live Stream</LiveButton>
      </Hero>
      <Container fullWidth>
        <DanceStyles type="ages" headline="Dance Classes for Any Age" />
        {/* <SubHeading>Our Story as Featured by</SubHeading>
        <img src={googlelogo} />
        <VideoContainer>
          <SingleVideoCotnainer>
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/jcwcEuNetMk"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </SingleVideoCotnainer>
        </VideoContainer> */}
        {/* <Instagram /> */}
      </Container>
    </Layout>
  )
}

export default Index
