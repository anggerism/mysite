/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here 
  title, desc, is property in this export object
  */
  
  
  siteMetadata: {
    title: "Angger site",
    description: "Portfolio and some random stuff",
    author: "@anggerisme",
    person: { name: "angger" },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "john", age: 32 },
      { name: "susan", age: 22 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1wzdpulrukh1`,
        // Learn about environment variables, to hide this sensitive token, .env ignored in github ignore: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
