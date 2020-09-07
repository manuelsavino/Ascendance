import React, { useEffect } from "react"
import PropTypes from "prop-types"
import withLocation from "../components/withLocation"

import Layout from "../components/layout"
import SEO from "../components/seo"

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

const Authorization = ({ search }) => {
  useEffect(() => {
    addScript("https://paperform.co/__embed")
  }, [])

  let prefill = Object.keys(search)
    .map(property => `${property}=${search[property]}`)
    .join("&")

  return (
    <>
      <Layout hero={false}>
        <SEO title="Authorization" />
        {console.log(prefill)}
        <div
          style={{ marginTop: "30px" }}
          data-prefill={`lan=${seach.lan}`}
          data-paperform-id="q0mp7wbt"
        ></div>
      </Layout>
    </>
  )
}

Authorization.propTypes = {
  search: PropTypes.object,
}

export default withLocation(Authorization)
