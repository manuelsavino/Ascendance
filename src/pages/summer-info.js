import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Summer1 from "../images/summer1.jpg"
import Summer2 from "../images/summer2.jpg"

const SummerInfo = () => {
  return (
    <Layout hidefreeflass hero={false}>
      <Seo title="Summer Info" />
      <div className="flex justify-center flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2 pt-10">
        <img src={Summer1} alt="summer camp flyer" />
        <img src={Summer2} alt="summer camp flyer" />
      </div>
    </Layout>
  )
}

export default SummerInfo
