import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import breakpoints from "./breakpoints"

const Button = styled.a`
  display: inline-block;
  padding: 13px 16px;
  margin: 0px;
  background-color: #c0392b;
  border: 1px solid #b13428;
  border-radius: 2px;
  color: #fff;
  font-size: 1.4rem;
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
    padding: 20px 32px;
    border-color: #d85c4f;
    font-size: 1.6rem;

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
  <Button as={`button`} big={props.big} {...props}>
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
