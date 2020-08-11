import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import withLocation from "../components/withLocation"
import Loading from "../images/loading.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

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

  const closeModal = () => {
    setShowModal(false)
  }
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Layout hero={false}>
        <SEO title="Home" />
        <div
          style={{ marginTop: "30px" }}
          data-prefill={`88mik=--1--`}
          data-paperform-id="vnhsjqfa"
        >
          <img src={Loading} />
        </div>
      </Layout>
    </>
  )
}

PaperForm.propTypes = {
  search: PropTypes.object,
}

export default withLocation(PaperForm)
