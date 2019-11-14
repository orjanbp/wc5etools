import _ from "lodash"

const filterCreatures = (creatures, filter) => {
  let nameRegex = filter.name
    .split(/['\s,-]+/)
    .map((term) => `(${term})`)
    .join(`.*`)
  nameRegex = RegExp(nameRegex, "gi")

  let filteredCreatures = _.filter(creatures, (creature) => nameRegex.test(creature.name))

  return filteredCreatures
}

export default filterCreatures
