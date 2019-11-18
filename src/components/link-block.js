import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import breakpoints from "./breakpoints"

const LinkBlock = styled(Link)`
  display: block;
  background-color: #fbfaf9;
  padding: 32px;
  border: 1px solid #ede3d4;
  border-radius: 3px
;
  text-decoration: none;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;

  & h3 {
    margin-top: 0px;
    color: #2c3e50;
  }

  & p {
    margin-bottom: 0px;
    color: #2c3e50;
  }

  &:hover,
  &:focus {
    background-color: #ffffff;
    border-color: #cf3e2e;
  }

  &:active {
    background-color: #f3f2f1;
  }
`

const LinkBlockHeader = styled.h2`
  margin-left: 4px;
  margin-bottom: 16px;
  color: #c0392b;
`

const LinkBlockGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  & ${LinkBlock} {
    width: 50%;

    @media ${breakpoints.small} {
      width: 100%;
    }
  }
`

const LinkBlockItem = ({ to, children }) => (
  <LinkBlock to={to}>{children}</LinkBlock>
)

export { LinkBlockHeader, LinkBlockGroup, LinkBlockItem }
