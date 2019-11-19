import React from "react"
import _ from "lodash"

import { BestiaryFilterStore } from "../../../stores/bestiary-filter-store"
import { getCreatureData } from "../data/creature-data"

import filterCreatures from "../utils/filter-creatures"
import { CreatureListGroup, CreatureListItem } from "../components/creature-list"

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
  const { filterState } = React.useContext(BestiaryFilterStore)
  const creatureData = getCreatureData()

  let creatures = filterCreatures(creatureData, filterState)
  let creaturesByCR = getCreaturesByCR(creatures)

  React.useEffect(() => {
    // console.log(state)
  })

  return (
    <>
      {_.keys(creaturesByCR)
        .sort((a, b) => a - b)
        .map((category) => (
          <CreatureListGroup key={creaturesByCR[category].cr}>
            <h3>CR {creaturesByCR[category].cr}</h3>
            {_.map(creaturesByCR[category].creatures, (creature) => (
              <CreatureListItem key={creature.id} creature={creature} />
            ))}
          </CreatureListGroup>
        ))}
    </>
  )
}

export default AllCreatures
