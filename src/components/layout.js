/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./_partials/header"
import Footer from "./_partials/footer"
import backgroundLight from "../images/background-light.png"

import "./_css/normalize.css"
import "./_css/layout.css"

console.log(backgroundLight)

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#F4F1EB",
        backgroundImage: `url(${backgroundLight})`,
        backgroundPosition: "center center"
      }}
    >
      <Header />
      <main
        style={{
          flexGrow: 1,
          margin: `0 auto`,
          width: "100%",
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 64,
          paddingBottom: 64
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
