import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ScheduleViewer from "../components/Schedule/ScheduleViewer"

const Schedule = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ScheduleViewer />
    </Layout>
  )
}

export default Schedule
