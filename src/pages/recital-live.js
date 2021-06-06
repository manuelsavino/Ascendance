import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

import Seo from "../components/seo"

const RecitalLive = () => {
  return (
    <>
      <Layout hidefreeflass hero={false}>
        <Seo title="Recital Live" />
        <div className="pt-28 md:pt-10">
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
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default RecitalLive
