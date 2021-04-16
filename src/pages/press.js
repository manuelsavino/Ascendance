import React, { useState } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  VideoContainer,
  SingleVideoCotnainer,
} from "../components/common/layout"
import TheKeyWord from "../images/theyKeyword.jpeg"
import MediaCard from "../components/MediaCards"
import ModalTest from "../components/Modal/Modal"

import { StaticQuery, graphql } from "gatsby"

const Media = () => {
  const [showModal, setShowModal] = useState(false)
  const [video, setVideo] = useState(null)

  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allSanityMediaCard {
            edges {
              node {
                heading
                body
                subHeading
                modalvideo
                url
                image {
                  asset {
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allSanityMediaCard }) => (
        <Layout>
          <SEO title="Media" />
          {showModal && (
            <ModalTest close={() => setShowModal(false)}>
              <VideoContainer>
                <SingleVideoCotnainer>
                  <iframe
                    width="560"
                    height="315"
                    src={video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </SingleVideoCotnainer>
              </VideoContainer>
            </ModalTest>
          )}

          <Container>
            <div>
              <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                  <div className="space-y-5 sm:space-y-4">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                      Press Center
                    </h2>
                    <p className="text-base text-gray-500">
                      Ascendance Studio is a nationally acclaimed dance studio
                      that trains young artists who are passionate about dance
                      and aspire to take their abilities to the next level.
                    </p>
                    <p className="text-base text-gray-500">
                      Our mission is to instill an appreciation for the art of
                      dance in a safe, family-friendly, quality atmosphere,
                      where kids can have fun while improving their technique.
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
                      {allSanityMediaCard.edges.map(card => (
                        <MediaCard
                          showModal={() => {
                            setShowModal(true)
                          }}
                          key={card.node.heading}
                          image={card.node.image.asset.url}
                          heading={card.node.heading}
                          subHeading={card.node.subHeading}
                          body={card.node.body}
                          url={card.node.url}
                          modalvideo={card.node.modalvideo}
                          setVideo={setVideo}
                          // video={card.node.modalvideo ? card.node.url : }
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Layout>
      )}
    />
  )
}

export default Media
