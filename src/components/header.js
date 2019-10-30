import { Link } from "gatsby"
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
  font-weight: 600;
`

const HeaderBarRight = styled.div`
  align-self: center;
  font-size: 12px;
`

const HeaderLink = styled(Link)`
  color: #f4d03e;
  text-decoration: none;
`

const Header = () => (
  <HeaderBar>
    <HeaderBarLeft>
      <HeaderLink to="/">WC5E Bestiary</HeaderLink>
    </HeaderBarLeft>
    <HeaderBarRight>
      <HeaderLink>Github</HeaderLink>
    </HeaderBarRight>
  </HeaderBar>
)

export default Header
