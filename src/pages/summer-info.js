import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button } from "../components/common/layout"
import Summer1 from "../images/summer1.jpg"
import Summer2 from "../images/summer2.jpg"

const SummerInfo = () => {
  return (
    <Layout hidefreeflass={true} hero={false}>
      <Seo title="Summer Info" />
      <div className="flex justify-center flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2 pt-10">
        <Button to="/registration?type=summer">Registration</Button>
      </div>
      <div className="flex justify-center flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2 pt-10">
        <img src={Summer1} alt="summer camp flyer" />
        <img src={Summer2} alt="summer camp flyer" />
      </div>
      <div className="flex justify-center flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2 pt-10">
        <Button to="/registration?type=summer">Registration</Button>
      </div>
    </Layout>
  )
}

export default SummerInfo
