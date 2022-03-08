import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// we pass in query, gatsby does something with the query that we provide
const getData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        person {
          name
        }
        simpleData
        complexData {
          name
          age
        }
      }
    }
  }
`

const Fetchdata = () => {
  // pulling data out of the object
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* {data.site.siteMetadata.author} 4:10:00*/}
      {author}
    </div>
  )
}

export default Fetchdata
