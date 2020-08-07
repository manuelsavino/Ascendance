import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import withLocation from "../components/withLocation"
// import { Link } from "gatsby"
import { Modal } from "../components/Modal/Modal"

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
        {console.log(showModal)}
        <SEO title="Home" />
        {/* <Hero>
          <button
            onClick={() => {
              setShowModal(true)
            }}
          >
            Show Modal
          </button>
        </Hero> */}
        <div
          style={{ marginTop: "30px" }}
          data-prefill={`88mik=--1--`}
          data-paperform-id="vnhsjqfa"
        ></div>
        {showModal && <Modal close={closeModal}></Modal>}
      </Layout>
    </>
  )
}

PaperForm.propTypes = {
  search: PropTypes.object,
}

export default withLocation(PaperForm)
