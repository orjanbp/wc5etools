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

const getCreatureCRDecimal = (cr) => {
  let crDecimal = cr
  if (cr == "1/8") crDecimal = 0.125
  if (cr == "1/4") crDecimal = 0.25
  if (cr == "1/2") crDecimal = 0.5

  return crDecimal
}

const crToDecimal = (cr) => {}

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

  return {
    name: name,
    type: type,
    cr: cr,
    crDecimal: getCreatureCRDecimal(cr),
    slug: getCreatureSlug(name),
    md: creature
  }
}

exports.addToCreature = addToCreature
exports.getCreatureName = getCreatureName
exports.exportCreature = exportCreature
