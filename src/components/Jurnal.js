import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Projects from "./Projects"
import { GatsbyImage } from "gatsby-plugin-image"
import BlogPage from "../templates/blog"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        title
        datePost(fromNow: true)
        slug
        blogPost {
          raw
        }
      }
    }
  }
`

const Jurnal = ({ journal }) => {
  const data = useStaticQuery(query)

  // Opsi 1
  //     const {
  //     allContentfulJurnal: { nodes: jurnal },
  //   } = useStaticQuery(query)
  // just get the same array

  // Opsi 2

  // console.log(jurnal)

  const jurnal = data.allContentfulBlogPost.nodes
  return (
    <div class="Blog">
      <div className="page-header" h1>
        Jurnal
        <hr />
      </div>
      {jurnal.map(node => {
        return (
          <section class="post">
            {/* format : https://youtu.be/8t0vNu2fCCM?t=13695 */}
            <Link to={`blog/${node.slug}`}>
              <h2>{node.title}</h2>
              {/* <span>{nodes.node.title}</span> */}
            </Link>
            <p>{node.datePost}</p>
            <hr />
            <p>{documentToReactComponents(JSON.parse(node.blogPost.raw))}</p>
          </section>
        )
      })}
      <hr />
    </div>
  )
}

export default Jurnal
