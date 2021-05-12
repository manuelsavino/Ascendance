import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { RegButton } from "../components/common/layout"
import SEO from "../components/seo"

const FormDiv = styled.div`
  & > iframe {
    min-height: 700px !important;
  }
`

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

const Authorization = () => {
  const [registration, setRegistration] = useState(null)
  useEffect(() => {
    addScript("https://paperform.co/__embed")
  }, [])

  return (
    <>
      <Layout hidefreeflass hero={false}>
        <SEO title="Registration" />
        {registration === null && (
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-center pt-20 md:space-x-2">
            <RegButton onClick={() => setRegistration("summer")}>
              Summer Registration
            </RegButton>
            <RegButton onClick={() => setRegistration("regular")}>
              Evening Registration
            </RegButton>
          </div>
        )}

        {registration && registration === "summer" && (
          <FormDiv
            style={{ marginTop: "110px" }}
            data-prefill-inherit="1"
            data-paperform-id="obz70vox"
          ></FormDiv>
        )}
        {registration && registration === "regular" && (
          <FormDiv
            style={{ marginTop: "30px" }}
            data-prefill-inherit="1"
            data-paperform-id="tsaummrd"
          ></FormDiv>
        )}
      </Layout>
    </>
  )
}

export default Authorization
