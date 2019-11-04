import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ToolLink = styled(Link)`
  background-color: #fbfaf9;
  padding: 20px 32px;
  border: 1px solid #ede3d4;
  border-radius: 2px;
  color: #2c3e50;
  text-decoration: none;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;

  &:hover {
    background-color: #fafafa;
  }
`

const ToolLinkItem = ({ to, children }) => (
  <ToolLink to={to}>{children}</ToolLink>
)

const ToolLinkGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  & ${ToolLink} {
    display: block;
    width: 50%;
  }
`

export { ToolLinkGroup, ToolLinkItem }
