import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../components/common/layout"
import ReactCanvasConfetti from "react-canvas-confetti"

const Index = () => {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(false)

  useEffect(() => {
    startAnimation()
  }, [])

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

  const handleFire = () => {
    startAnimation()
  }

  return (
    <Layout>
      <SEO title="Classes" />
      <Container>
        <div className="pt-36">
          <h1 className="pl-5 text-8xl font-black text-ascendance leading-none">
            YOU
            <br />
            MADE
            <br />
            IT
          </h1>
        </div>
        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      </Container>
    </Layout>
  )
}

export default Index
