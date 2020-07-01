import React, { useEffect } from "react"
import PropTypes from "prop-types"
import withLocation from "../components/withLocation"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../styled/Hero"

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

const classDict = {}

const PaperForm = ({ search }) => {
  const { formId } = search
  // const { className } = search
  const className = "Thursday - 5:00PM - 3-6 Hip Hop"
  useEffect(() => {
    addScript("https://paperform.co/__embed")
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <Hero></Hero>
      <div data-prefill={`88mik=--1--`} data-paperform-id="vnhsjqfa"></div>
    </Layout>
  )
}

PaperForm.propTypes = {
  search: PropTypes.object,
}

export default withLocation(PaperForm)
