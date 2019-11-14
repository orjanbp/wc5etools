import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"

const BestiaryTypes = () => {
  const data = useStaticQuery(graphql`
    query {
      creatures: allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "creature" }, title: {} } }
      ) {
        edges {
          node {
            frontmatter {
              type
            }
          }
        }
        distinct(field: frontmatter___type)
      }
    }
  `)

  return data.creatures.edges.map((edge) => edge.node.frontmatter.type)
}

export const getCreatureTypes = () => {
  let creatureTypes = BestiaryTypes()
  return creatureTypes
}
