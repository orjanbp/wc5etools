import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HeaderBar = styled.header`
  display: flex;
  height: 64px;
  padding: 0px 32px;
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
    padding: 12px 16px;

    &:hover,
    &:focus {
      color: #faecb1;
    }
  }
`

const HeaderBarRight = styled.div`
  align-self: center;
  font-size: 1.4rem;

  & svg {
    font-size: 2.4rem;
    margin-left: 8px;
    vertical-align: middle;
  }

  & a {
    padding: 12px 16px;
    color: #f4d03e;
    font-weight: 400;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 2px;

    &:hover {
      color: #faecb1;

      & svg {
        color: #faecb1;
      }
    }
  }
`

const Header = () => (
  <HeaderBar>
    <HeaderBarLeft>
      <Link to="/">WC5E Tools</Link>
    </HeaderBarLeft>
    <HeaderBarRight>
      <Link to="/bestiary">Bestiary</Link>
      <a href="https://github.com/orjanbp/wc5ebestiary">
        Github
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a href="https://www.reddit.com/r/wc5e/">
        Reddit
        <FontAwesomeIcon icon={["fab", "reddit"]} />
      </a>
    </HeaderBarRight>
  </HeaderBar>
)

export default Header
