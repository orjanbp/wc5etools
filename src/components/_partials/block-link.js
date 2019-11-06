import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BlockLink = styled(Link)`
  background-color: #fbfaf9;
  padding: 32px;
  border: 1px solid #ede3d4;
  border-radius: 2px;
  color: #2c3e50;
  text-decoration: none;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;

  &:hover {
    background-color: #fafafa;
  }

  & h3 {
    margin-top: 0px;
  }

  & p {
    margin-bottom: 0px;
  }
`

const BlockLinkGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  & ${BlockLink} {
    display: block;
    width: 50%;
  }
`

const BlockLinkItem = ({ to, children }) => (
  <BlockLink to={to}>{children}</BlockLink>
)

export { BlockLinkGroup, BlockLinkItem }
