import React, { useEffect } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../styled/Hero"
import ScheduleViewer from "../components/Schedule/ScheduleViewer"

const Schedule = () => {
  useEffect(() => {
    // lottie.loadAnimation({
    //   container: animationContainer.current,
    //   animationData: animation,
    // })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <h1>Try a class for Free</h1>
      </Hero>
      <ScheduleViewer />
      <Hero>
        <h1>Try a class for Free</h1>
      </Hero>
    </Layout>
  )
}

export default Schedule
