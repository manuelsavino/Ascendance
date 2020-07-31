import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

export default function danceStylePage(props) {
  //   const { markdownRemark } = props.data
  return (
    <Layout>
      {console.log(props)}
      {/* <h1>{markdownRemark.frontmatter.title}</h1> */}
      <h1>Hi</h1>
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
