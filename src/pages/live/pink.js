import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {
  Container,
  Button,
  VideoContainer,
  SingleVideoCotnainer,
} from "../../components/common/layout"
import { Heading } from "../../components/common/copy"

const NotFoundPage = () => (
  <Layout hidefreeflass>
    <SEO title="Pink Room Live Stream" />
    <Container>
      <VideoContainer>
        <SingleVideoCotnainer>
          <iframe
            src="https://player.twitch.tv/?channel=ascendancestudio&parent=www.doraldance.com&muted=true"
            height="720"
            width="1280"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
          ></iframe>
        </SingleVideoCotnainer>
      </VideoContainer>
    </Container>
  </Layout>
)

export default NotFoundPage
