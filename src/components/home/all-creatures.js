import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const tidyCreatureData = (edge) => {
  return {
    name: edge.node.frontmatter.title,
    type: edge.node.frontmatter.type,
    path: edge.node.frontmatter.path
  }
}

const AllCreatures = () => {
  const data = useStaticQuery(graphql`
    query {
      creatures: allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "creature" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              type
              template
              path
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.creatures.edges.map((edge) => {
        let creature = tidyCreatureData(edge)
        return <div>{creature.name}</div>
      })}
    </div>
  )

  //   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default AllCreatures
