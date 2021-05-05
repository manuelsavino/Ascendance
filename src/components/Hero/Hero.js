import React from "react"
import { Button } from "../common/layout"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const LiveButton = styled(Button)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "heroNew.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Button to="/schedule" style={{ marginRight: "10px" }}>
            See Our Schedule
          </Button>
          <Button to="/summer-camp">Get Summer Camp Info</Button>
          <LiveButton to="/live">Live Stream</LiveButton>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 800px;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  padding-top: 200px;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(transparent, rgba(0, 0, 0, 0.95));
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    background-attachment: scroll;
    background-position: center;
  }
`

export default StyledBackgroundSection
