const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const creatureTemplate = path.resolve(`src/templates/creatureTemplate.js`)

  const creatures = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "creature" } } }
        sort: { fields: frontmatter___title, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (creatures.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  creatures.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: creatureTemplate,
      context: {} // additional data can be passed via context
    })
  })
}
