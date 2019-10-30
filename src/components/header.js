import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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

  & a {
    color: #f4d03e;
    font-weight: 600;
    text-decoration: none;
  }
`

const HeaderBarRight = styled.div`
  align-self: center;
  font-size: 1.4rem;

  & svg {
    font-size: 2.4rem;
    margin-left: 8px;
  }

  & * {
    vertical-align: middle;
    color: #f4d03e;
    font-weight: 400;
    text-decoration: none;
  }
`

const Header = () => (
  <HeaderBar>
    <HeaderBarLeft>
      <Link to="/">WC5E Bestiary</Link>
    </HeaderBarLeft>
    <HeaderBarRight>
      <a href="https://github.com/orjanbp/wc5ebestiary">
        <span>Github</span>
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
    </HeaderBarRight>
  </HeaderBar>
)

export default Header
