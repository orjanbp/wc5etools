import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import CreatureStatblock from "../components/creature/creature-statblock"

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark

  return (
    <Layout>
      <CreatureStatblock>
        <div
          class="creature-statblock"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </CreatureStatblock>
    </Layout>
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
