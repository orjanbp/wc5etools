import _ from "lodash"

const filterCreatures = (creatures, filter) => {
  let nameRegex = RegExp(
    filter.name
      .split(/['\s,-]+/)
      .map((term) => `(${term})`)
      .join(`.*`),
    "gi"
  )

  filter.type = ["humanoid"]

  //   console.log(filter)

  let filteredCreatures = _.filter(creatures, (creature) => {
    let checkName = nameRegex.test(creature.name)
    let checkType = _.includes(filter.type, creature.type)

    if (checkName && checkType) {
      return true
    } else {
      return false
    }
  })

  return filteredCreatures
}

export default filterCreatures
