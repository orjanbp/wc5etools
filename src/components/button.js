import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import breakpoints from "./breakpoints"

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

  ${(props) =>
    props.big &&
    css`
      padding: 16px 24px;
      border-color: #d85c4f;

      &:active {
        border-color: #cf3e2e;
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

export const ButtonEventHandler = (props) => (
  <Button as={Button} big={props.big} {...props}>
    {props.children}
  </Button>
)

export const ButtonRouteLink = (props) => (
  <Button as={Link} to={props.to} big={props.big} {...props}>
    {props.children}
  </Button>
)

export const ButtonExternalLink = (props) => (
  <Button href={props.href} target='_blank' big={props.big} {...props}>
    {props.children}
  </Button>
)
