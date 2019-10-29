import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  console.log(frontmatter)
  return (
    <div className="">
      <div className="">
        {/* <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.type}</h3> */}
        <div className="" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        type
      }
    }
  }
`
