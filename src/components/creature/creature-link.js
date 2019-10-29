import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const CreatureLinkAnchor = styled(Link)`
  display: block;
  padding: 8pt;
  margin-bottom: 4pt;
  border: 1px solid #dedede;
  border-radius: 2pt;
  text-decoration: none;

  &:hover {
    background-color: #fafafa;
  }
`

const CreatureLink = ({ creature }) => (
  <CreatureLinkAnchor to={creature.path}>{creature.name}</CreatureLinkAnchor>
)

export default CreatureLink
