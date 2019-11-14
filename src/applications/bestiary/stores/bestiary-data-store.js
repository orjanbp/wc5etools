import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"

const tidyCreatureData = (creatures) => {
  return _.map(creatures, (creature) => {
    return {
      id: creature.node.id,
      ...creature.node.frontmatter
    }
  })
}

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

  return data.creatures.edges
}

export const getCreatureData = () => {
  let creatureData = tidyCreatureData(BestiaryData())
  return creatureData
}
