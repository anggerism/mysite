import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// const query = graphql`
//   {
//     allContentfulProjects {
//       nodes {
//         title
//         datePost
//         description
//         image {
//           gatsbyImageData
//         }
//       }
//     }
//   }
// `

// const title = () => {
//   const data = useStaticQuery(query)

// }

const Projects = ({ projects = [] }) => {
  return (
    <div className="project-list">
      {projects.map(project => {
        const { title, datePost, description, image } = project

        return (
          <Link to={`/${title}`} className="project">
            {project.title}
            <GatsbyImage
              image={image.gatsbyImageData}
              className="project-img"
              alt={title}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default Projects
