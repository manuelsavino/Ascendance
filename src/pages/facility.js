import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Container,
  VideoContainer,
  SingleVideoCotnainer,
} from "../components/common/layout"

export default function Facility() {
  return (
    <Layout>
      <Seo title="Facility" />
      <Container>
        <VideoContainer>
          <SingleVideoCotnainer>
            <iframe
              title="Video tour of studio"
              width="420"
              height="315"
              src="https://www.youtube.com/embed/xuTIAaqGG9c?rel=0"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </SingleVideoCotnainer>
        </VideoContainer>
      </Container>
    </Layout>
  )
}
