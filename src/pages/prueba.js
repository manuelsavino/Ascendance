import React, { useEffect } from "react"

import LandingLayout from "../components/LandingLayout"
import SEO from "../components/seo"
import Schedule from "../components/Schedule"
import {
  Container,
  VideoContainer,
  SingleVideoCotnainer,
} from "../components/common/layout"
import { SubHeading } from "../components/common/copy"
import colors from "../components/common/colors"

import Testimonies from "../components/Testimonies"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendar,
  faClock,
  faUser,
  faStar,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons"
import {
  StepImage,
  StepTitle,
  StepDetails,
  Step,
  NextSteps,
} from "../components/thanks/thanksStyled"

const Grid = styled.div`
  display: flex;
  & > div {
    min-width: 50%;
  }
  & > div > div {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const TrialImage = styled(StepImage)`
  min-width: 75px;
  min-height: 75px;
  background: ${colors.primary};
  align-self: flex-start;
  & > svg {
    color: #fff;
    min-height: 50px;
  }
`
const TrialDetails = styled(StepDetails)`
  font-weight: 300;
  color: ${colors.secondary};
`

const TrialInfo = styled(Step)`
  margin-top: 80px;
  & > div > ul {
    padding-left: 10px;
    padding-top: 10px;
    font-weight: 300;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`

const TrialSubHeading = styled(SubHeading)`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  padding-top: 30px;
  @media screen and (max-width: 768px) {
    line-height: 1;
    font-size: 2rem;
  }
`

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

const Prueba = () => {
  useEffect(() => {
    addScript("https://paperform.co/__embed")
  }, [])

  return (
    <LandingLayout>
      <SEO title="Prueba" />
      <Container style={{ margin: "50px auto 0" }}>
        <TrialSubHeading color="primary">
          Comienza el año bailando!
        </TrialSubHeading>
        <VideoContainer>
          <SingleVideoCotnainer>
            <iframe
              title="New School Year Dancing youtube video"
              width="420"
              height="315"
              src="https://www.youtube.com/embed/Y09HeZxxPdY?rel=0"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </SingleVideoCotnainer>
        </VideoContainer>
        <TrialSubHeading
          color="primary"
          style={{ textAlign: "center", paddingTop: "30px" }}
        >
          Llene esta planilla para registrarse para una clase de prueba GRATIS
        </TrialSubHeading>

        <div
          style={{ marginTop: "30px" }}
          data-prefill-inherit="1"
          data-paperform-id="vnhsjqfa"
        ></div>
        <Grid>
          <NextSteps>
            <TrialInfo>
              <TrialImage>
                <FontAwesomeIcon size="2x" icon={faUser} />
              </TrialImage>
              <div>
                <StepTitle>Edades</StepTitle>
                <TrialDetails>
                  Tenemos clases específicas por edad:
                </TrialDetails>
                <ul>
                  <li>3-4 años de edad</li>
                  <li>5-6 años de edad</li>
                  <li>7-9 años de edad</li>
                  <li>10-12 años de edad</li>
                  <li>Adolescentes</li>
                </ul>
              </div>
            </TrialInfo>
            <Step>
              <TrialImage>
                <FontAwesomeIcon size="2x" icon={faCalendar} />
              </TrialImage>
              <div>
                <StepTitle>Fechas</StepTitle>
                <TrialDetails>
                  Usted puede programar su clase Gratis cualquier dia que
                  tengamos clases para esa edad!
                </TrialDetails>
              </div>
            </Step>
            <Step>
              <TrialImage>
                <FontAwesomeIcon size="2x" icon={faClock} />
              </TrialImage>
              <div>
                <StepTitle>Horas</StepTitle>
                <TrialDetails>
                  Todas nuestras clases empiezan después de las 5:00 PM
                </TrialDetails>
              </div>
            </Step>
            <Step>
              <TrialImage>
                <FontAwesomeIcon size="2x" icon={faStar} />
              </TrialImage>
              <div>
                <StepTitle>Estilos</StepTitle>
                <TrialDetails>
                  Jazz, Tap, Hip Hop, Ballet, Lírico, Flamenco, Contemporáneo y
                  mucho más…
                </TrialDetails>
              </div>
            </Step>
            <Step>
              <TrialImage>
                <FontAwesomeIcon size="2x" icon={faMapMarker} />
              </TrialImage>
              <div>
                <StepTitle>Direcction</StepTitle>
                <TrialDetails>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/place/Ascendance+Studio,+10466+NW+31st+Terrace,+Doral,+FL+33172/@25.8108899,-80.351904,15z/data=!4m2!3m1!1s0x88d9b959aa99fef7:0x1984b28f6313b51"
                  >
                    10466 NW 31st Terrace Doral, FL 33172
                  </a>
                </TrialDetails>
              </div>
            </Step>
          </NextSteps>
          <div>
            <SubHeading
              color="primary"
              style={{ textAlign: "center", paddingTop: "30px" }}
            >
              ¿Qué dicen nuestras bailarinas sobre nosotros?
            </SubHeading>
            <VideoContainer>
              <SingleVideoCotnainer>
                <iframe
                  title="What our dancers say about us youtube video"
                  width="420"
                  height="315"
                  src="https://www.youtube.com/embed/f6bC-CBO4mo?rel=0"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </SingleVideoCotnainer>
            </VideoContainer>

            <SubHeading
              color="primary"
              style={{ textAlign: "center", paddingTop: "30px" }}
            >
              Los Beneficios de la Danza
            </SubHeading>
            <VideoContainer>
              <SingleVideoCotnainer>
                <iframe
                  title="The Benefits of Dance youtube video"
                  width="420"
                  height="315"
                  src="https://www.youtube.com/embed/hal-RQSZkpc?rel=0"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </SingleVideoCotnainer>
            </VideoContainer>
          </div>
        </Grid>
        <Grid>
          <div>
            <SubHeading
              color="primary"
              style={{ textAlign: "center", paddingTop: "30px" }}
            >
              Video de Nuestro Estudio
            </SubHeading>
            <VideoContainer>
              <SingleVideoCotnainer>
                <iframe
                  title="Video Tour of our Studio youtube video"
                  width="420"
                  height="315"
                  src="https://www.youtube.com/embed/xuTIAaqGG9c?rel=0"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </SingleVideoCotnainer>
            </VideoContainer>
          </div>
          <div>
            <SubHeading
              color="primary"
              style={{ textAlign: "center", paddingTop: "30px" }}
            >
              Direcciones al Estudio
            </SubHeading>
            <VideoContainer>
              <SingleVideoCotnainer>
                <iframe
                  title="Google Maps embed"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.0191644908878!2d-80.36861108470288!3d25.802941813189303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b959aa99fef7%3A0x1984b28f6313b51!2sAscendance%20Studio!5e0!3m2!1sen!2sus!4v1600544196364!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                ></iframe>
              </SingleVideoCotnainer>
            </VideoContainer>
          </div>
        </Grid>
        <TrialSubHeading
          color="primary"
          style={{ textAlign: "center", paddingTop: "30px" }}
        >
          Horario de Clases
        </TrialSubHeading>
        <Schedule />

        <SubHeading
          color="primary"
          style={{ textAlign: "center", paddingTop: "30px" }}
        >
          ¿Qué dicen nuestros padres sobre Ascendance?
        </SubHeading>
        <Testimonies lang="es" />
      </Container>
    </LandingLayout>
  )
}

export default Prueba
