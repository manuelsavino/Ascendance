import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

const Authorization = () => {
  useEffect(() => {
    addScript("https://paperform.co/__embed")
  }, [])

  return (
    <>
      <Layout hidefreeflass hero={false}>
        <SEO title="Registration" />

        <div
          style={{ marginTop: "30px" }}
          data-prefill-inherit="1"
          data-paperform-id="tsaummrd"
        ></div>
      </Layout>
    </>
  )
}

export default Authorization
