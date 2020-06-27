import React, { useEffect } from "react"
// import { Link } from "gatsby"
import lottie from "lottie-web"
import animation from "../images/team.json"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../styled/Hero"
import DanceStyles from "../components/DanceStyles/DanceStyles"

const IndexPage = () => {
  let animationContainer = React.createRef()
  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
    })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <h1>Try a class for Free</h1>
      </Hero>

      <DanceStyles />
      {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    </Layout>
  )
}

export default IndexPage
