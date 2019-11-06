import React from "react"
import styled, { css } from "styled-components"
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

const HeaderBarSection = styled.div`
  align-self: center;
  font-size: 1.4rem;
  min-width: 200px;

  ${(props) => props.center && css`
    text-align: center;
  `}

  ${(props) => props.right && css`
    text-align: right;
  `}
`

const HeaderBarTitle = styled(Link)`
  color: #f4d03e;
  font-weight: 600;
  text-decoration: none;
  padding: 12px 16px;

  &:hover,
  &:focus {
    color: #faecb1;
  }
`

const HeaderBarLink = styled.a`
  padding: 12px 16px;
  color: #f4d03e;
  font-weight: 400;
  text-decoration: none;
  vertical-align: middle;
  border-radius: 2px;

  & svg {
    font-size: 2.4rem;
    vertical-align: middle;
  }

  &:hover {
    color: #faecb1;

    & svg {
      color: #faecb1;
    }
  }
`

const Header = () => (
  <HeaderBar>
    <HeaderBarSection>
      <HeaderBarTitle to="/">WC5E Tools</HeaderBarTitle>
    </HeaderBarSection>
    <HeaderBarSection center>
      <HeaderBarLink as={Link} to="/bestiary">Bestiary</HeaderBarLink>
    </HeaderBarSection>
    <HeaderBarSection right>
      <HeaderBarLink href="https://github.com/orjanbp/wc5ebestiary">
        <FontAwesomeIcon icon={["fab", "github"]} />
      </HeaderBarLink>
      <HeaderBarLink href="https://www.reddit.com/r/wc5e/">
        <FontAwesomeIcon icon={["fab", "reddit"]} />
      </HeaderBarLink>
    </HeaderBarSection>
  </HeaderBar>
)

export default Header
