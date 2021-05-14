import React, { useEffect, useState } from "react"
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

const Uniforms = ({ search }) => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    addScript("https://paperform.co/__embed")

    setTimeout(() => {
      setReady(true)
    }, 500)
  }, [])

  let prefill = Object.keys(search)
    .map(property => `${property}=${search[property]}`)
    .join("&")

  if (!ready)
    return (
      <>
        <Layout hero={false}>
          <Seo title="Uniforms" />
        </Layout>
      </>
    )

  return (
    <>
      <Layout hero={false}>
        <Seo title="Free Class" />
        {console.log(search)}
        <div
          style={{ paddingTop: "30px" }}
          data-prefill={prefill}
          data-paperform-id="companyuniforms"
        ></div>
      </Layout>
    </>
  )
}

Uniforms.propTypes = {
  search: PropTypes.object,
}

export default withLocation(Uniforms)
