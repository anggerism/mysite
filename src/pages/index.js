import React from "react"
// import Layout from "../pages/components/Layout"
import "../components/layout.css"
import styled from "styled-components"
import Layout from "../components/Layout"
import Fetchdata from "../pages/fetchdata"
import Jurnal from "../components/Jurnal"

/*jika kamu letakkan asset di static folder
you don't get any optimasi dari gatsby*/

/*children represents whatever inside the components : https://youtu.be/RaTpreA0v7Q?t=3774
 props are used to pass data from a parent component to a child component in React and they are the main mechanism for component communication.
*/

export default function Home() {
  return (
    // <HomePage>
    <Layout>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body>
          <section className="showcase">
            <div class="intro text-center">
              <h1>
                Hi, <Fetchdata />
                I'm
              </h1>
              <p class="lead">
                I'm an Electrical Engineer living in Switzerland. I design
                hardware and develop embedded software. I hold a master's degree
                from ETH Zürich.
              </p>
              <p class="lead">
                This is my website about my projects and academic work.
              </p>
              <a href="/Projects" class="btn btn-primary">
                Go to projects
              </a>
              <hr />
              <p>Scroll down to see more detail</p>
            </div>
          </section>
          <div className="container">
            <Jurnal/>
          </div>
        </body>
      </html>
    </Layout>
  )
}

const HomePage = styled.body`
  /* background: grey;
  width: 100%; */
`
