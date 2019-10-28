const _ = require("lodash")

const regex = {
  name: /( ## [A-Z])/g,
  type: />(\*|| \*)([A-Z])/g,
}

addToCreature = (creature, line) => {
  creature.push(line)
}

getCreatureName = creature => {
  return _(creature)
    .filter(line => regex.name.test(line))
    .toString()
    .substring(5)
}

getCreatureType = creature => {
  return _(creature)
    .filter(line => regex.type.test(line))
    .replace(/>|\*|,|\(.*\)/g, '')
    .split(' ')
    .filter(Boolean)[1]
}

getCreatureSlug = name => {
  return name
    .toLowerCase()
    .split(" ")
    .join("-")
}

exportCreature = creature => {
  let name = getCreatureName(creature)
  let type = getCreatureType(creature)
  let slug = getCreatureSlug(name)

  return {
    name: name,
    type: type,
    slug: slug,
    md: creature
  }
}

exports.addToCreature = addToCreature
exports.getCreatureName = getCreatureName
exports.exportCreature = exportCreature
