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
      }
    }
  `)

  return _(data.creatures.edges)
    .map((edge) => edge.node.frontmatter.type)
    .uniq()
    .value()
}

export const getCreatureTypes = () => {
  let creatureTypes = BestiaryTypes()
  return creatureTypes
}
