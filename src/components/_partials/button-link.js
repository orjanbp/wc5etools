import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled.a`
  display: inline-block;
  background-color: #c0392b;
  padding: 8px 16px;
  border: 1px solid #b13428;
  border-radius: 2px;
  color: #fff;
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

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
`

const ButtonLink = ({ children, to, href }) => {
  if (to !== "")
    return (
      <Button as={Link} to={to}>
        {children}
      </Button>
    )
  if (to === "")
    return (
      <Button href={href} target="_blank">
        {children}
      </Button>
    )
}

ButtonLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string
}

ButtonLink.defaultProps = {
  to: "",
  href: ""
}

export default ButtonLink
