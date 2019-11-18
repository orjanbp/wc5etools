import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import breakpoints from "../breakpoints"

const Button = styled.a`
  display: inline-block;
  background-color: #c0392b;
  padding: 8px 16px;
  border: 1px solid #b13428;
  border-radius: 2px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    background-color: #cf3e2e;
    color: #fff;
  }

  &:active {
    background-color: #b13428;
    border-color: #a33025;
  }

  ${(props) => props.big && css`
    padding: 16px 24px;
    border-color: #D85C4F;

    &:active {
      border-color: #CF3E2E;
    }
  `}

  @media ${breakpoints.xsmall} {
    display: block;
    width: 100%;

    & + & {
      margin-top: 8px;
      margin-left: 0px;
    }
  }
`

const LinkButton = ({ children, to, href, big }) => {
  if (to !== "")
    return (
      <Button as={Link} to={to} big={big}>
        {children}
      </Button>
    )
  if (to === "")
    return (
      <Button href={href} target="_blank" big={big}>
        {children}
      </Button>
    )
}

LinkButton.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  big: PropTypes.bool
}

LinkButton.defaultProps = {
  to: "",
  href: "",
  big: false
}

export default LinkButton
