import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  VideoContainer,
  SingleVideoCotnainer,
} from "../components/common/layout"
import { Heading } from "../components/common/copy"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faThumbsUp,
  faUser,
  faCheck,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import {
  StepImage,
  StepTitle,
  StepDetails,
  Step,
  NextSteps,
  FollowUs,
} from "../components/thanks/thanksStyled"

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

const Index = () => {
  useEffect(() => {
    addScript(
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=244628426908532&autoLogAppEvents=1"
    )
  }, [])
  return (
    <Layout>
      <SEO title="Thanks" />
      <Container>
        <Heading center color="primary">
          Thank You!
        </Heading>
        <VideoContainer>
          <SingleVideoCotnainer>
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/iS3EcIWJ2FE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </SingleVideoCotnainer>
        </VideoContainer>

        <NextSteps>
          <h2 color="primary">Next Steps:</h2>
          <Step>
            <StepImage>
              <FontAwesomeIcon size="2x" icon={faEnvelope} />
            </StepImage>
            <div>
              <StepTitle>1. Email</StepTitle>
              <StepDetails>
                You will receive an email confirmation with all the details in a
                few minutes!
              </StepDetails>
            </div>
          </Step>
          <Step>
            <StepImage>
              <FontAwesomeIcon size="2x" icon={faThumbsUp} />
            </StepImage>
            <div>
              <StepTitle>2. Like our Facebook page</StepTitle>
              <div
                class="fb-like"
                data-href="https://www.facebook.com/ascendancemiami/"
                data-width="300px"
                data-layout="standard"
                data-action="like"
                data-size="small"
                data-share="false"
              ></div>
            </div>
          </Step>
          <Step>
            <StepImage>
              <FontAwesomeIcon size="2x" icon={faInstagram} />
            </StepImage>
            <div>
              <StepTitle>3. Follow us on Instagram</StepTitle>
              <StepDetails>
                <FollowUs
                  href="https://www.instagram.com/ascendanceMiami"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} /> Ascendancemiami
                </FollowUs>
              </StepDetails>
            </div>
          </Step>
          <Step>
            <StepImage>
              <FontAwesomeIcon size="2x" icon={faUser} />
            </StepImage>
            <div>
              <StepTitle>4. What to wear</StepTitle>
              <StepDetails>
                Comfortable clothes (leggings and t-shirt) and tennis shoes
              </StepDetails>
            </div>
          </Step>
          <Step>
            <StepImage>
              <FontAwesomeIcon size="2x" icon={faCheck} />
            </StepImage>
            <div>
              <StepTitle>5. What to bring</StepTitle>
              <StepDetails>A water bottle and lots of energy!</StepDetails>
            </div>
          </Step>
          <Step>
            <StepImage>
              <FontAwesomeIcon size="2x" icon={faQuestion} />
            </StepImage>
            <div>
              <StepTitle>6. Questions?</StepTitle>
              <StepDetails>
                Give us a call! <a href="tel:786-571-7778">786-571-7778</a>
              </StepDetails>
            </div>
          </Step>
        </NextSteps>
      </Container>
    </Layout>
  )
}

export default Index
