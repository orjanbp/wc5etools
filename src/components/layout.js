/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import backgroundLight from "../images/background-light.png"

import "./css/normalize.css"
import "./css/layout.css"

console.log(backgroundLight)

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <Header />
      <div
        style={{
          backgroundColor: "#F4F1EB",
          backgroundImage: `url(${backgroundLight})`,
          backgroundPosition: "center center",
          flexGrow: 1,
          paddingTop: 64,
          paddingBottom: 64
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
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
