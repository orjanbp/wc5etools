import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"

const BestiaryData = () => {
  const data = useStaticQuery(graphql`
    query {
      creatures: allMarkdownRemark(filter: { frontmatter: { template: { eq: "creature" } } }) {
        edges {
          node {
            id
            frontmatter {
              name: title
              type
              cr
              crDecimal
              template
              path
            }
          }
        }
      }
    }
  `)

  return _(data.creatures.edges)
    .map((edge) => {
      return {
        id: edge.node.id,
        ...edge.node.frontmatter
      }
    })
    .value()
}

export const getCreatureData = () => {
  let creatureData = BestiaryData()
  return creatureData
}
