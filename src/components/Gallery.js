import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
// why {GatsbyImage}, we iterating over the nodes everytime and get different data  : https://youtu.be/RaTpreA0v7Q?t=18462
// get dynamic data into gallery components

const query = graphql`
  {
    allFile {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 200, height: 200)
        }
      }
    }
  }
`
// Arrrow function yg disimpan dalam variable Gallery
/* 
- map() creates a new array from calling a function for every array element. 
- map() calls a function once for each element in an array.

*/

const Gallery = () => {
  const data = useStaticQuery(query)
  // https:youtu.be/RaTpreA0v7Q?t=18782
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {/* const test2 = companies.map(company => company.name) */}
      {nodes.map(image => {
        const { name } = image
        return (
          <span>
            <GatsbyImage
              // company.name)
              image={image.childImageSharp.gatsbyImageData}
              className="gallery-image"
            />
            <p>{name}</p>
          </span>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  .gallery-image {
    margin-right: 20px;
    border-radius: 1rem;
  }
`

export default Gallery
