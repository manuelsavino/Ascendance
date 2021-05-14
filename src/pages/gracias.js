import React, { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
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
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
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
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=1931067663785995&autoLogAppEvents=1"
    )
  }, [])
  return (
    <Layout>
      <Seo title="Thanks" />
      <Container>
        <Heading center color="primary">
          Gracias!
        </Heading>
        <VideoContainer>
          <SingleVideoCotnainer>
            <iframe
              title="thanks youtube video"
              width="420"
              height="315"
              src="https://www.youtube.com/embed/ZoSKUHUJ0Ns"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </SingleVideoCotnainer>
        </VideoContainer>

        <NextSteps>
          <h2 color="primary">Próximos Pasos:</h2>
          <Step>
            <StepImage>
              <FontAwesomeIcon size="2x" icon={faEnvelope} />
            </StepImage>
            <div>
              <StepTitle>1. Correo Electrónico</StepTitle>
              <StepDetails>
                En unos minutos recibirás un correo electrónico con todos los
                detalles.
              </StepDetails>
            </div>
          </Step>
          <Step>
            <StepImage>
              <FontAwesomeIcon size="2x" icon={faThumbsUp} />
            </StepImage>
            <div>
              <StepTitle>
                2. Dale Me Gusta a nuestra página en Facebook
              </StepTitle>
              <StepDetails>
                <FollowUs
                  href="https://www.facebook.com/ascendancemiami"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} /> Ascendancemiami
                </FollowUs>
              </StepDetails>
            </div>
          </Step>
          <Step>
            <StepImage>
              <FontAwesomeIcon size="2x" icon={faInstagram} />
            </StepImage>
            <div>
              <StepTitle>3. Siguenos en Instagram</StepTitle>
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
              <StepTitle>4. Vestimenta</StepTitle>
              <StepDetails>
                Ropa comoda (camisa y leggings) y zapatos de hacer ejercicio.
              </StepDetails>
            </div>
          </Step>
          <Step>
            <StepImage>
              <FontAwesomeIcon size="2x" icon={faCheck} />
            </StepImage>
            <div>
              <StepTitle>5. Que debo traer ese dia</StepTitle>
              <StepDetails>Una botella de agua y mucha energia!</StepDetails>
            </div>
          </Step>
          <Step>
            <StepImage>
              <FontAwesomeIcon size="2x" icon={faQuestion} />
            </StepImage>
            <div>
              <StepTitle>6. Preguntas?</StepTitle>
              <StepDetails>
                Llamanos! <a href="tel:786-571-7778">786-571-7778</a>
              </StepDetails>
            </div>
          </Step>
        </NextSteps>
      </Container>
    </Layout>
  )
}

export default Index
