import React, { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "swiper/swiper-bundle.css"
import Parent from "../images/parents.jpeg"
import Studio from "../images/studio.jpeg"
import Staff from "../images/staff.jpeg"

import {
  Container,
  VideoContainer,
  SingleVideoCotnainer,
} from "../components/common/layout"
import { SubHeading } from "../components/common/copy"

import Testimonies from "../components/Testimonies"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendar,
  faClock,
  faUser,
  faStar,
  faMapMarker,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons"

const Grid = styled.div`
  display: flex;
  align-items: center;
  & > div {
    min-width: 50%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
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

const Authorization = () => {
  useEffect(() => {
    addScript("https://paperform.co/__embed")
  }, [])

  return (
    <Layout>
      <SEO title="Summer Camp" />
      <Container style={{ margin: "50px auto 0" }}>
        <TrialSubHeading color="primary">
          Dance through the summer
        </TrialSubHeading>
        <VideoContainer>
          <SingleVideoCotnainer>
            <iframe
              title="New School Year Dancing youtube video"
              width="420"
              height="315"
              src="https://www.youtube.com/embed/pbZiQro3C5w?rel=0"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </SingleVideoCotnainer>
        </VideoContainer>
        <TrialSubHeading
          color="primary"
          style={{ textAlign: "center", paddingTop: "30px" }}
        >
          Complete this form to get information about our Summer Camp
        </TrialSubHeading>

        <div
          style={{ marginTop: "30px" }}
          data-prefill-inherit="1"
          data-paperform-id="paoslkug"
        ></div>
        <div className="block md:hidden">
          <div className="bg-ascendance py-2 flex justify-center items-center text-white text-lg">
            <p>Starting From</p>
          </div>
          <div className="flex justify-center items-center flex-col bg-white">
            <p className="text-4xl relative mt-5">
              <sup
                className="absolute top-1 text-base"
                style={{ left: "-10px" }}
              >
                $
              </sup>
              117
              <sup
                className="absolute top-1 text-base"
                style={{ right: "-10px" }}
              >
                *
              </sup>
            </p>
            <p className="text-2xl mb-2">Per Week</p>
          </div>
          <div className="text-ascendance flex justify-start items-center bg-white text-xs px-2 py-1">
            <p>*Pricing for 9 Week Pacakge</p>
          </div>
        </div>

        <div>
          <TrialSubHeading
            color="primary"
            style={{ textAlign: "center", paddingTop: "30px" }}
          >
            Health & Safety in the Studio
          </TrialSubHeading>
          <Swiper
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 3000 }}
            centeredSlides={true}
            breakpoints={{
              // when window width is >= 300px
              300: {
                slidesPerView: 1.5,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
            }}
            className="mt-5 mb-20"
          >
            <SwiperSlide>
              <img className="" src={Parent} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Staff} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Studio} />
            </SwiperSlide>
          </Swiper>
        </div>

        <Grid>
          <div>
            <div className="flex">
              <div className="h-16 w-16 rounded-full flex justify-center items-center bg-ascendance text-whtie">
                <FontAwesomeIcon
                  className="text-white fill-current"
                  size="2x"
                  icon={faUser}
                />
              </div>
              <div className="pl-4 text-gray-600">
                <h3 className="text-3xl ">Ages</h3>
                <h4 className="pb-2 font-semibold">
                  All students ages 5+ are invited!
                </h4>
                <p>Junior Group (Ages 5 to 9)</p>
                <p>Teens Group (Ages 10+)</p>
              </div>
            </div>
            <div className="flex mt-4 md:mt-6">
              <div className="h-16 w-16 rounded-full flex justify-center items-center bg-ascendance text-whtie">
                <FontAwesomeIcon
                  className="text-white fill-current"
                  size="2x"
                  icon={faCalendar}
                />
              </div>
              <div className="pl-4 text-gray-600">
                <h3 className="text-3xl ">Dates</h3>
                <div className="text-gray-600  text-xs lg:text-base">
                  <h4 className="font-semibold">Session 1</h4>
                  <p>Week 1 – Mon. June 14 – Fri. June 18</p>
                  <p>Week 2 – Mon. June 21 – Fri. June 25</p>
                  <p>Week 3 – Mon. June 28 – Fri. July 02</p>

                  <h4 className="font-semibold mt-4 md:mt-6">Session 2</h4>
                  <p>Week 1 – Mon. July 5 – Fri. July 9</p>
                  <p>Week 2 – Mon. July 12 – Fri. July 16</p>
                  <p>Week 3 – Mon. July 19 – Fri. July 23</p>

                  <h4 className="font-semibold mt-4 md:mt-6">Session 3</h4>
                  <p>Week 1 – Mon. July 26 – Fri. July 30</p>
                  <p>Week 2 – Mon. August 2 – Fri. August 6</p>
                  <p>Week 3 – Mon. August 9 – Fri. August 13</p>
                </div>
              </div>
            </div>

            <div className="flex mt-4 md:mt-6">
              <div className="h-16 w-16 rounded-full flex justify-center items-center bg-ascendance text-whtie">
                <FontAwesomeIcon
                  className="text-white fill-current"
                  size="2x"
                  icon={faClock}
                />
              </div>
              <div className="pl-4 text-gray-600">
                <h3 className="text-3xl ">Hours</h3>
                <p>8:00am to 3:00pm (Late pick up available)</p>
              </div>
            </div>

            <div className="flex mt-4 md:mt-6">
              <div className="h-16 w-16 rounded-full flex justify-center items-center bg-ascendance text-white">
                <FontAwesomeIcon
                  className="text-white fill-current flex-grow"
                  size="2x"
                  icon={faStar}
                />
              </div>
              <div className="pl-4 text-gray-600 w-56 xl:w-64 2xl:w-auto">
                <h3 className="text-3xl ">Styles</h3>
                <p>
                  Jazz, Tap, Hip Hop, Ballet, Acro, Lyrical, Flamenco,
                  Contemporary and much more….
                </p>
              </div>
            </div>
            <div className="flex mt-4 md:mt-6">
              <div className="h-16 w-16 rounded-full flex justify-center items-center bg-ascendance text-whtie">
                <FontAwesomeIcon
                  className="text-white fill-current"
                  size="2x"
                  icon={faMapMarker}
                />
              </div>
              <div className="pl-4 text-gray-600 w-56 md:w-auto">
                <h3 className="text-3xl ">Location</h3>
                <a
                  target="_blank"
                  className="text-ascendance"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Ascendance+Studio,+10466+NW+31st+Terrace,+Doral,+FL+33172/@25.8108899,-80.351904,15z/data=!4m2!3m1!1s0x88d9b959aa99fef7:0x1984b28f6313b51"
                >
                  10466 NW 31st Terrace Doral, FL 33172
                </a>
              </div>
            </div>
            <div className="hidden md:flex mt-4 md:mt-6">
              <div className="h-16 w-16 rounded-full flex justify-center items-center bg-ascendance text-whtie">
                <FontAwesomeIcon
                  className="text-white fill-current"
                  size="2x"
                  icon={faDollarSign}
                />
              </div>
              <div className="pl-4 text-gray-600 w-56 md:w-auto">
                <h3 className="text-3xl ">Starting From</h3>
                <p>$117 Per Week for 9 Week Package</p>
              </div>
            </div>
          </div>
          <div>
            <SubHeading
              color="primary"
              style={{ textAlign: "center", paddingTop: "30px" }}
            >
              What our dancers say about us?
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
              The Benefits of Dance
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
              Video Tour of our Studio
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
              Directions to the Studio
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
        <Testimonies lang="en" />
      </Container>
    </Layout>
  )
}

export default Authorization
