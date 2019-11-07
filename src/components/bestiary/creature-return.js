import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import breakpoints from "../_partials/breakpoints"

const ReturnButton = styled(Link)`
  display: inline-block;
  background-color: #fbfaf9;
  padding: 12px 16px;
  margin-bottom: 16px;
  border: 1px solid #ede3d4;
  border-radius: 2px;
  color: #2c3e50;
  text-decoration: none;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);

  & svg {
    margin-right: 8px;
  }

  &:hover,
  &:focus {
    background-color: #ffffff;
    color: #cf3e2e;
    border-color: #cf3e2e;
  }

  &:active {
    background-color: #f6f5f4;
  }

  @media ${breakpoints.small} {
    display: flex;
    align-items: center;
    margin: 0px -16px 32px;
    padding: 16px 24px;
    background-color: #c0392b;
    border: none;
    border-radius: 0px;
    color: #fff;

    & svg {
      margin-right: 16px;
      font-size: 3.2rem;
      font-weight: 300;
    }

    &:hover,
    &:focus {
      color: #fff;
      background-color: #cf3e2e;
    }

    &:active {
      background-color: #b13428;
      border-color: #a33025;
    }
  }
`

const CreatureReturn = () => (
  <ReturnButton to="/bestiary">
    <FontAwesomeIcon icon={["fa", "chevron-left"]} />
    Back to Bestiary
  </ReturnButton>
)

export default CreatureReturn
