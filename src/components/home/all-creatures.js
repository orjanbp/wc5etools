import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"

import CreatureLink from '../creature/creature-link'

const tidyCreatureData = (creatures) => {
  return _.map(creatures, (creature) => {
    return {
      id: creature.node.id,
      ...creature.node.frontmatter
    }
  })
}

const getCreaturesByCR = (creatures) => {
  let creaturesByCR = {}

  creatures.map((creature) => {
    let decimal = creature.crDecimal.toString()
    if (!creaturesByCR[decimal]) {
      creaturesByCR[decimal] = {
        cr: creature.cr,
        crDecimal: decimal,
        creatures: []
      }
    }
    creaturesByCR[decimal].creatures.push(creature)
  })

  return creaturesByCR
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

  let creatureData = tidyCreatureData(data.creatures.edges)
  let creaturesByCR = getCreaturesByCR(creatureData)

  return (
    <>
      {_.keys(creaturesByCR)
        .sort((a, b) => a - b)
        .map((category) => (
          <div style={{ marginTop: 64 }}>
            <h5>Challenge Rating {creaturesByCR[category].cr}</h5>
            {_.map(creaturesByCR[category].creatures, (creature) => (
              <CreatureLink creature={creature} />
            ))}
          </div>
        ))}
    </>
  )

  //   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default AllCreatures
