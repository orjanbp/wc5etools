import _ from "lodash"

const filterCreatures = (creatures, filter) => {
  let nameRegex = RegExp(
    filter.name
      .split(/['\s,-]+/)
      .map((term) => `(${term})`)
      .join(`.*`),
    "gi"
  )

  let filteredCreatures = _.filter(creatures, (creature) => {
    let checkName = nameRegex.test(creature.name)
    let checkType = filter.type.length > 0 ? _.includes(filter.type, creature.type) : true

    if (checkName && checkType) {
      return true
    } else {
      return false
    }
  })

  return filteredCreatures
}

export default filterCreatures
