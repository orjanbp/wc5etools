import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import breakpoints from './breakpoints'

const HeaderBar = styled.header`
  display: flex;
  height: 64px;
  padding: 0px 24px;
  background-color: #373737;
  border-bottom: 1px solid #1E1E1E;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.12);
  justify-content: space-between;

  @media ${breakpoints.large} {
    padding: 0px 8px;
  }
`

const HeaderBarSection = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  font-size: 1.4rem;

  ${(props) => props.right && css`
    justify-content: flex-end;
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

const HeaderBarDivider = styled.span`
  display: inline-block;
  background: #515151;
  height: 24px;
  width: 2px;
  margin: 0px 4px;
  border-radius: 1px;
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
      <HeaderBarDivider />
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
