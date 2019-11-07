import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled.a`
  display: inline-block;
  background-color: #c0392b;
  border: 1px solid #b13428;
  border-radius: 2px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

  padding: ${(props) => (props.big ? "16px 24px" : "8px 16px")};

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
