const _ = require("lodash")

const regex = {
  name: /( ## [A-Z])/g,
  type: />(\*|| \*)([A-Z])/g,
  challenge: /(\*\*Challenge\*\*)/g
}

const addToCreature = (creature, line) => {
  creature.push(line)
}

const getCreatureName = (creature) => {
  return _(creature)
    .filter((line) => regex.name.test(line))
    .toString()
    .substring(5)
}

const getCreatureType = (creature) => {
  return _(creature)
    .filter((line) => regex.type.test(line))
    .replace(/>|\*|,|\(.*\)/g, "")
    .split(" ")
    .filter(Boolean)[1]
}

const getCreatureCR = (creature) => {
  return _(creature)
    .filter((line) => regex.challenge.test(line))
    .replace(/>|\*|-|\(.*\)|[Challenge]/g, "")
    .replace(/ /g, "")
}

const getCreatureSlug = (name) => {
  return name
    .toLowerCase()
    .split(" ")
    .join("-")
}

const exportCreature = (creature) => {
  let name = getCreatureName(creature)
  let type = getCreatureType(creature)
  let cr = getCreatureCR(creature)
  let slug = getCreatureSlug(name)

  console.log(getCreatureCR(creature))

  return {
    name: name,
    type: type,
    cr: cr,
    slug: slug,
    md: creature
  }
}

exports.addToCreature = addToCreature
exports.getCreatureName = getCreatureName
exports.exportCreature = exportCreature
