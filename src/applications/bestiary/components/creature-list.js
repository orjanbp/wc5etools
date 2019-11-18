import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import _ from "lodash"
import breakpoints from "../../../components/breakpoints"

const CreatureLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fbfaf9;
  padding: 20px 32px;
  margin-bottom: 8px;
  border: 1px solid #ede3d4;
  border-radius: 2px;
  color: #2c3e50;
  text-decoration: none;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #ffffff;
    color: #2c3e50;
    border-color: #cf3e2e;

    & h4 {
      color: #cf3e2e;
    }
  }

  &:active {
    background-color: #f6f5f4;
  }
`

const CreatureLinkLeft = styled.div`
  display: inline-block;
  margin-right: 8px;

  & h4 {
    font-weight: 600;
  }
`

const CreatureLinkRight = styled.div`
  display: inline-block;
  margin-left: 8px;

  & span {
    margin-left: 24px;
    color: #a7adb4;
    font-size: 12px;

    @media ${breakpoints.xsmall} {
      display: block;
      margin-left: 0px;
      text-align: right;
    }
  }
`

const CreatureListItem = ({ creature }) => (
  <CreatureLink to={creature.path}>
    <CreatureLinkLeft>
      <h4>{creature.name}</h4>
    </CreatureLinkLeft>
    <CreatureLinkRight>
      <span>{_.startCase(creature.type)}</span>
      <span>CR {creature.cr}</span>
    </CreatureLinkRight>
  </CreatureLink>
)

const CreatureListGroup = styled.div`
  width: 100%;

  & h3 {
    margin-top: 20px;
    margin-left: 4px;
    color: #c0392b;
  }

  @media ${breakpoints.med} {
    & + & {
      padding-top: 32px;
    }
  }
`

export { CreatureListGroup, CreatureListItem }
