import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

export default function danceStylePage(props) {
  // const { markdownRemark } = props.data
  return (
    <Layout>
      {/* {console.log(markdownRemark)}
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} /> */}
    </Layout>
  )
}

// export const query = graphql`
//   query PageQuery($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         youtube
//       }
//     }
//   }
// `
