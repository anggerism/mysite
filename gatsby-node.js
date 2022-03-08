const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
}

// 2. Create pages generate pages dynamically: https://youtu.be/8t0vNu2fCCM?t=9471

exports.createPages = async ({ graphql, actions }) => {
  // 1. Get path to template
  // 2. Get Blog Post
  // 3. Create new pages
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog.js`)

  // await : https://youtu.be/8t0vNu2fCCM?t=9747
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.nodes.forEach(node => {
    createPage({
      component: blogPostTemplate,
      path: `/blog/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
