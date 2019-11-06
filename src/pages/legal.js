import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContentBlock from "../components/_partials/content-block"

const LegalText = styled.div`
  margin-bottom: 40px;
  font-size: 1.4rem;

  & h3 {
    margin-bottom: 4px;
  }

  & li {
    margin: 16px 0px 16px 24px;

    &::marker {
      font-weight: 600;
      list-style: decimal outside;
    }
  }
`

const LegalPage = () => {
  const data = useStaticQuery(graphql`
    query {
      legalText: allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "legal" } } }
        sort: { order: ASC, fields: frontmatter___order }
      ) {
        edges {
          node {
            id
            html
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Legal Stuff" />
      <ContentBlock>
        <h1>Legal Stuff </h1>
        {data.legalText.edges.map((edge) => (
          <LegalText
            key={edge.node.id}
            dangerouslySetInnerHTML={{ __html: edge.node.html }}
          ></LegalText>
        ))}
      </ContentBlock>
    </Layout>
  )
}

export default LegalPage
