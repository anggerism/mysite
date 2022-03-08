// import { useStaticQuery } from "gatsby"
import React from "react"
import ReactDOM from "react-dom"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage } from "gatsby-plugin-image"
import Gallery from "../components/Gallery"

// Generating blog page : https://youtu.be/8t0vNu2fCCM?t=14038

// npm i @contentful/rich-text-react-renderer
// convert JSON into react component that we can render aywhere (specific to react)

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      datePost(formatString: "MMMM Do, YYYY")
      blogPost {
        raw
        references {
          gatsbyImageData(width: 200)
        }
      }
      image {
        gatsbyImageData
      }
    }
  }
`

// gatsby image : https://youtu.be/RaTpreA0v7Q?t=18168

// slug : https://youtu.be/8t0vNu2fCCM?t=12422
const BlogPage = props => {
  const option = {
    // 1. renderNode : property to highlight specific node, https://youtu.be/8t0vNu2fCCM?t=14786
    renderNode: {
      "embedded-asset-block": node => {
        const alt = ""
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  const Data = props.data.contentfulBlogPost
  return (
    <div>
      <h1>{Data.title}</h1>
      <p>{Data.datePost}</p>
      {documentToReactComponents(JSON.parse(Data.blogPost.raw))}
      {/* <Gallery /> */}
      <GatsbyImage image={Data.image.gatsbyImageData} />
    </div>
  )
}

export default BlogPage
