import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Schedule from "../components/Schedule"
import {
  Container,
  VideoContainer,
  SingleVideoCotnainer,
} from "../components/common/layout"
import { Heading, SubHeading } from "../components/common/copy"
import Testimonies from "../components/Testimonies"
import styled from "styled-components"

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

const TrialSubHeading = styled(SubHeading)`
  font-size: 3rem;
`

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

const Authorization = () => {
  useEffect(() => {
    addScript("https://paperform.co/__embed")
  }, [])

  return (
    <>
      <Layout hidefreeflass hero={false}>
        <SEO title="Trial" />
        <Container>
          <TrialSubHeading
            color="primary"
            style={{ textAlign: "center", paddingTop: "30px" }}
          >
            #Monthly Magic Session
          </TrialSubHeading>
          <VideoContainer>
            <SingleVideoCotnainer>
              <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/9Gy-Jr0NXLI?rel=0"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </SingleVideoCotnainer>
          </VideoContainer>
          <TrialSubHeading
            color="primary"
            style={{ textAlign: "center", paddingTop: "30px" }}
          >
            Fill in the Form to Schedule your Free Trial
          </TrialSubHeading>

          <div
            style={{ marginTop: "30px" }}
            data-prefill-inherit="1"
            data-paperform-id="vnhsjqfa"
          ></div>

          <Grid>
            <div>
              <SubHeading
                color="primary"
                style={{ textAlign: "center", paddingTop: "30px" }}
              >
                Video Tour of our Studio
              </SubHeading>
              <VideoContainer>
                <SingleVideoCotnainer>
                  <iframe
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
                Directions to the Studio
              </SubHeading>
              <VideoContainer>
                <SingleVideoCotnainer>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.0191644908878!2d-80.36861108470288!3d25.802941813189303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b959aa99fef7%3A0x1984b28f6313b51!2sAscendance%20Studio!5e0!3m2!1sen!2sus!4v1600544196364!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </SingleVideoCotnainer>
              </VideoContainer>
            </div>
          </Grid>
          <TrialSubHeading
            color="primary"
            style={{ textAlign: "center", paddingTop: "30px" }}
          >
            Schedule
          </TrialSubHeading>
          <Schedule />
          <SubHeading
            color="primary"
            style={{ textAlign: "center", paddingTop: "30px" }}
          >
            What our parents say about us?
          </SubHeading>
          <Testimonies />
        </Container>
      </Layout>
    </>
  )
}

export default Authorization
