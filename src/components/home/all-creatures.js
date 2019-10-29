import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import _ from "lodash"

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
    <div>
      {_.keys(creaturesByCR)
        .sort((a, b) => a - b)
        .map((category) => (
          <>
            <div style={{ marginTop: 64 }}></div>
            <h3>{creaturesByCR[category].cr}</h3>
            {_.map(creaturesByCR[category].creatures, (creature) => (
              <div>
                <Link to={creature.path}>{creature.name}</Link>
              </div>
            ))}
          </>
        ))}
    </div>
  )

  //   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default AllCreatures
