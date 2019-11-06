const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const creatureTemplate = path.resolve(`src/templates/creatureTemplate.js`)
  const redirectTemplate = path.resolve(`src/templates/redirectTemplate.js`)

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

  const redirect = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { redirect: { eq: true } } }) {
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
    actions.createPage({
      path: node.frontmatter.path,
      component: creatureTemplate,
      context: {} // additional data can be passed via context
    })
  })

  redirect.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.frontmatter.path,
      component: redirectTemplate,
      context: {} // additional data can be passed via context
    })
  })
}
