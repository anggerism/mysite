import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Nav>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <nav>
        <label class="logo">Anggerisme</label>
        <ul>
          <li>
            <Link class="active" to="/">
              <i class="fa fa-fw fa-home"></i>Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i class="fa fa-fw fa-user"></i>About
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <i class="fa fa-fw fa-folder-open"></i>Projects
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class="fa fa-fw fa-code"></i>Tutorial
            </Link>
          </li>
        </ul>
      </nav>
    </Nav>
  )
}

export default Navbar

const Nav = styled.section`
  background: #4a5568;
  overflow: auto;
  width: 100%;
  /* padding-top: 0px;
  padding-bottom: 0px; */
  /* color: red; */

  /* nav {
    height: 80px;
    width: 100px;
  } */

  label.logo {
    color: white;
    font-size: 16px;
    line-height: 80px;
    padding: 0 50px;
    font-weight: bold;
    /* margin-left: 0px; */
  }

  nav ul {
    float: right;
    margin-right: 30px;
  }
  ul li {
    display: inline-block;
    line-height: 80px;
    margin: 0 20px;
  }

  a {
    color: white;
    text-transform: uppercase;
    font-size: 13px;
    padding: 10px 10px;
    border-radius: 3px;
    /* margin-top: 0px;
    margin-bottom: 0px; */
  }
  li .active {
    background-color: #8b919c;
  }
  a:hover {
    background: white;
    color: green;
    font-weight: bold;
  }
  .fa {
    margin-right: 7px;
  }
`
