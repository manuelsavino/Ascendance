import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ScheduleViewer from "../components/Schedule/ScheduleViewer"

const Tap = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ScheduleViewer style="Tap" heading="Tap Schedule" />
    </Layout>
  )
}

export default Tap
