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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.27);

  &:hover {
    background-color: #cf3e2e;
    color: #fff;
  }

  &:active {
    background-color: #b13428;
    border-color: #a33025;
  }

  & + & {
    margin-left: 8px;
  }
`

const ButtonLink = ({ children, style, to, href }) => {
  if (to !== "") {
    return (
      <Link as={Button} to={to}>
        {children}
      </Link>
    )
  } else {
    return (
      <Button href={href} target="_blank">
        {children}
      </Button>
    )
  }
}

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string
}

ButtonLink.defaultProps = {
  style: "primary",
  to: "",
  href: ""
}

export default ButtonLink
