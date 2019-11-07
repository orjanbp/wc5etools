import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import CreatureReturn from "../components/bestiary/creature-return"
import CreatureStatblock from "../components/bestiary/creature-statblock"

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark

  return (
    <Layout>
      <CreatureReturn />
      <CreatureStatblock html={html} />
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
