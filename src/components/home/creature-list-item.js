import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import _ from "lodash"

const CreatureLink = styled(Link)`
  display: flex;
  padding: 20px 32px;
  margin-bottom: 8px;
  justify-content: space-between;
  border: 1px solid #dedede;
  border-radius: 2px;
  text-decoration: none;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #fafafa;
  }
`

const CreatureLinkLeft = styled.div`
  & span {
    font-weight: 600;
  }
`

const CreatureLinkRight = styled.div`
  & span {
    margin-left: 24px;
    color: #A7ADB4;
    font-size: 12px;
  }
`

const CreautreListItem = ({ creature }) => (
  <CreatureLink to={creature.path}>
    <CreatureLinkLeft>
      <span>{creature.name}</span>
    </CreatureLinkLeft>
    <CreatureLinkRight>
      <span>{_.startCase(creature.type)}</span>
      <span>CR {creature.cr}</span>
    </CreatureLinkRight>
  </CreatureLink>
)

export default CreautreListItem
