import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

import Seo from "../components/seo"

const RecitalLive = () => {
  return (
    <>
      <Layout hidefreeflass hero={false}>
        <Seo title="Registration" />

        <div
          className="mt-12"
          style={{ padding: "40.25% 0 0 0", position: "relative" }}
        >
          <iframe
            src="https://player.vimeo.com/video/558172426"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      </Layout>
    </>
  )
}

export default RecitalLive
