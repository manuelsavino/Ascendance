import React, { useEffect } from "react"
import PropTypes from "prop-types"
import withLocation from "../components/withLocation"

import Layout from "../components/layout"
import Seo from "../components/seo"

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

const PaperForm = () => {
  useEffect(() => {
    addScript("https://paperform.co/__embed")
  }, [])

  return (
    <>
      <Layout hidefreeflass hero={false}>
        <Seo title="Auditions" />
        <div style={{ paddingTop: "40px" }} data-paperform-id="6xo4sobe"></div>
      </Layout>
    </>
  )
}

PaperForm.propTypes = {
  search: PropTypes.object,
}

export default withLocation(PaperForm)
