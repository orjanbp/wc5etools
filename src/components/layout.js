/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled, { css } from "styled-components"

import Header from "./_partials/header"
import Footer from "./_partials/footer"
import backgroundLight from "../images/background-light.png"
import breakpoints from "./_partials/breakpoints"

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
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 64px 16px;
  box-sizing: border-box;

  @media ${breakpoints.small} {
    padding: 32px 8px;
  }

  ${props => props.collapsePaddingMobile && css`
    @media ${breakpoints.small} {
      padding-top: 0px;
    }
  `}
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
