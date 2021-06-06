import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

import Seo from "../components/seo"

const RecitalLive = () => {
  return (
    <>
      <Layout hidefreeflass hero={false}>
        <Seo title="Recital Live" />
        <div className="pt-5 md:pt-10">
          <div
            className="flex justify-center flex-column
          "
            style={{ position: "relative" }}
          >
            <iframe
              src="https://player.vimeo.com/video/559705213?title=0"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <p>
              <a href="https://vimeo.com/559705213">
                Ascendance Studio 7th Annual Recital - Hope Over Fear
              </a>{" "}
              from <a href="https://vimeo.com/user5537201">PicBar</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p> */}
            ᐧ
          </div>
        </div>
      </Layout>
    </>
  )
}

export default RecitalLive
