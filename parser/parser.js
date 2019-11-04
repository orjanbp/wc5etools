const fs = require("fs")
const readline = require("readline")
const { addToCreature, exportCreature } = require("./creature-functions")
const _ = require("lodash")

const filepath = "parser/data/stats.txt"
const exportpath = "src/markdown-pages/bestiary"
let isCreature = false
let creature = []

const checkCreatureUnderscore = (creature) => {
  if (creature[1] === "___") {
    creature.splice(1, 1)
  }
  return creature
}

const writeFile = (creature) => {
  let file = fs.createWriteStream(`${exportpath}/${creature.slug}.md`)
  creature.md = checkCreatureUnderscore(creature.md)

  console.log([creature.name, creature.type])

  file.write(`---\n`)
  file.write(`title: "${creature.name}"\n`)
  file.write(`type: "${creature.type}"\n`)
  file.write(`cr: "${creature.cr}"\n`)
  file.write(`crDecimal: "${creature.crDecimal}"\n`)
  file.write(`template: "creature"\n`)
  file.write(`path: "/bestiary/${creature.slug}"\n`)
  file.write(`---\n\n`)

  // Write statblock into file
  creature.md.forEach((line) => {
    // console.log(line)
    file.write(`${line}\n`)
    if (line.indexOf("___") !== -1) {
      file.write(`>\n`)
    }
  })

  file.close()
}

const rl = readline.createInterface({
  input: fs.createReadStream(filepath),
  crlfDelay: Infinity
})

rl.on("line", (line) => {
  if (line.indexOf("___") !== -1 && line.indexOf(">") === -1) {
    addToCreature(creature, line)
    isCreature = true
    return
  }

  if (isCreature && line.indexOf(">") === 0) {
    addToCreature(creature, line)
    return
  }

  if (isCreature && line.length === 0) {
    let exportedCreature = exportCreature(creature)
    writeFile(exportedCreature)
    isCreature = false
    creature = []
    return
  }
})
