import React, { useEffect, useState } from "react"
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

const PaperForm = ({ search }) => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    addScript("https://paperform.co/__embed")

    setTimeout(() => {
      setReady(true)
    }, 500)
  }, [])

  if (!ready)
    return (
      <>
        <Layout hero={false}>
          <SEO title="Free Class" />
        </Layout>
      </>
    )

  return (
    <>
      <Layout hero={false}>
        <SEO title="Free Class" />
        {console.log(search)}
        <div
          style={{ marginTop: "30px" }}
          data-prefill={`${search.prefill}=${search.class}`}
          data-paperform-id="vnhsjqfa"
        ></div>
      </Layout>
    </>
  )
}

PaperForm.propTypes = {
  search: PropTypes.object,
}

export default withLocation(PaperForm)
