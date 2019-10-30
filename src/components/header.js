import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderBar = styled.header`
  display: flex;
  height: 64px;
  padding: 0px 48px;
  background-color: #373737;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.12);
  justify-content: space-between;
`

const HeaderBarLeft = styled.div`
  align-self: center;

  & span {
    color: #F4D03E;
    font-weight: 600;
  }
`

const HeaderBarRight = styled.div`
  align-self: center;

  & span {
    color: #F4D03E;
    font-size: 12px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderBar>
    <HeaderBarLeft>
      <span>WC5E Bestiary</span>
    </HeaderBarLeft>
    <HeaderBarRight>
      <span>Github</span>
    </HeaderBarRight>
  </HeaderBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
