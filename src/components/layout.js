/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import backgroundLight from "../images/background-light.png"

import "./css/normalize.css"
import "./css/layout.css"

console.log(backgroundLight)

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "#F4F1EB",
          backgroundImage: `url(${backgroundLight})`,
          backgroundPosition: 'center center'
        }}
      >
        <main
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          {children}
        </main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
