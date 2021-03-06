import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../components/common/layout"
import ReactCanvasConfetti from "react-canvas-confetti"
import withLocation from "../components/withLocation"
import congrats from "../images/congrats.png"
import { Link } from "@reach/router"

const Index = ({ search }) => {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(false)
  useEffect(() => {
    startAnimation()
  })

  const getInstance = instance => {
    animationInstance = instance
  }

  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    bottom: 0,
    left: 0,
  }

  let animationInstance = null
  let intervalId = null

  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min
  }

  const getAnimationSettings = (originXA, originXB) => {
    return {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: randomInRange(originXA, originXB),
        y: Math.random() - 0.2,
      },
    }
  }

  const nextTickAnimation = () => {
    animationInstance && animationInstance(getAnimationSettings(0.1, 0.3))
    animationInstance && animationInstance(getAnimationSettings(0.7, 0.9))
  }

  const startAnimation = () => {
    if (!isAnimationEnabled) {
      setIsAnimationEnabled(true)
      let count = 0
      intervalId = setInterval(() => {
        nextTickAnimation()
        count++
        if (count === 4) {
          clearInterval(intervalId)
          setIsAnimationEnabled(false)
        }
      }, 400)
    }
  }

  return (
    <Layout>
      <SEO title="Audition Results" />
      {/* {console.log(search.classes)}  */}
      <div className=" container mx-auto pt-10 md:pt-6">
        <div className="flex justify-center align-center flex-col md:w-1/3 mx-5 md:mx-auto  bg-ascendance p-5 md:p-10 rounded-lg">
          <img src={congrats} />
          <h1 className="mt-1 text-3xl text-center text-white font-bold">
            {search.name},
            <br />
            you made the team!
          </h1>
          <img
            className="rounded-full h-72 w-72 object-cover object-top mx-auto md:mt-3"
            src={search.img}
          />

          <h4 className="text-white text-2xl mt-4">Competitive Classes:</h4>
          <div className="flex flex-wrap my-1">
            {search.competitive &&
              search.competitive
                .split(",")
                .filter(danceClass => danceClass != "")
                .map(danceClass => {
                  return (
                    <p
                      key={danceClass}
                      className="text-ascendance bg-white rounded-xl px-2 mt-1 mr-2"
                    >
                      {danceClass}
                    </p>
                  )
                })}
          </div>
          <h4 className="text-white text-2xl mt-4">Special Numbers:</h4>
          <div className="flex flex-wrap my-1">
            {search.specials &&
              search.specials
                .split(",")
                .filter(danceClass => danceClass != "")
                .map(danceClass => {
                  return (
                    <p
                      key={danceClass}
                      className="text-ascendance bg-white rounded-xl px-2 mt-1 mr-2"
                    >
                      {danceClass}
                    </p>
                  )
                })}
          </div>
          <h4 className="text-white text-2xl mt-4">Required Classes:</h4>
          <div className="flex flex-wrap mt-1 mb-3">
            {search.rclasses &&
              search.rclasses
                .split(",")
                .filter(danceClass => danceClass != "")
                .map(danceClass => {
                  return (
                    <p
                      key={danceClass}
                      className="text-ascendance bg-white rounded-xl px-2 mt-1 mr-2"
                    >
                      {danceClass}
                    </p>
                  )
                })}
          </div>
          {search.disclaimer && (
            <p
              dangerouslySetInnerHTML={{ __html: decodeURI(search.disclaimer) }}
              className="text-white text-sm"
            ></p>
          )}
          <Link
            to="/auditionresults"
            className="bg-white text-ascendance rounded py-2 mt-4 text-center"
          >
            Search Again
          </Link>
        </div>
        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      </div>
    </Layout>
  )
}

export default withLocation(Index)
