import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

import Seo from "../components/seo"

const RecitalLive = () => {
  return (
    <>
      <Layout hidefreeflass hero={false}>
        <Seo title="Recital Live" />
        <div className="pt-20 md:pt-10 container mx-auto bg-ascendance">
          <div className="pt-48 md:pt-96" style={{ position: "relative" }}>
            <iframe
              src="https://vimeo.com/event/1054596/embed"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "75%",
                height: "75%",
              }}
            ></iframe>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default RecitalLive
