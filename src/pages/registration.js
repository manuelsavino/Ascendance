import React, { useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FormDiv = styled.div`
  & > iframe {
    min-height: 400px;
  }
`

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

        <FormDiv
          style={{ marginTop: "30px" }}
          data-prefill-inherit="1"
          data-paperform-id="tsaummrd"
        ></FormDiv>
      </Layout>
    </>
  )
}

export default Authorization
