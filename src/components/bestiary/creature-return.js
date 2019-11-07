import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
`

const CreatureReturn = () => (
  <ReturnButton to="/bestiary">
    <FontAwesomeIcon icon={["fa", "chevron-left"]} />
    Back to Bestiary
  </ReturnButton>
)

export default CreatureReturn
