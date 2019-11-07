/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

import Header from "./_partials/header"
import Footer from "./_partials/footer"
import backgroundLight from "../images/background-light.png"

import "./_css/normalize.css"
import "./_css/layout.css"

const LayoutOuter = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f1eb;
  background-image: url(${backgroundLight});
  background-position: center center;
`

const LayoutMain = styled.main`
  flex-grow: 1;
`

const LayoutInner = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 64px 16px 64px;
  box-sizing: border-box;
`

const Layout = ({ children }) => {
  return (
    <LayoutOuter>
      <Header />
      <LayoutMain>{children}</LayoutMain>
      <Footer />
    </LayoutOuter>
  )
}

export { Layout, LayoutInner }
