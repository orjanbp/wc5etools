import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import _ from "lodash"

const CreatureLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  background-color: #fbfaf9;
  padding: 20px 32px;
  margin-bottom: 8px;
  border: 1px solid #ede3d4;
  border-radius: 2px;
  color: #2c3e50;
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
    color: #a7adb4;
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
