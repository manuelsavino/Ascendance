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

  return (
    <>
      <Layout hero={false}>
        <SEO title="Authorization" />
        {console.log(window.location.search)}
        <div
          style={{ marginTop: "30px" }}
          data-prefill={window.location.search.substring(1)}
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
