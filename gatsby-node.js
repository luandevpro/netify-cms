const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions
   return graphql(`
    {
      allMarkdownRemark {
         edges {
           node {
             frontmatter {
               slug
             }
           }
         }
       }
    }
  `).then(({data}) => console.log(data) ||
    data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.frontmatter.slug}`,
        component: path.resolve("./src/components/postLayout.js"),
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  )
}

exports.onCreateNode = ({ node, getNode, actions }) => {
   const { createNodeField } = actions
   if (node.internal.type === `MarkdownRemark`) {
     const slug = createFilePath({ node, getNode, basePath: `pages` })
     createNodeField({
       node,
       name: `slug`,
       value: slug,
     })
   }
 }