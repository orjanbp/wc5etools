import React from "react"
import styled from "styled-components"

const BlockItem = styled.div`
  background-color: #fbfaf9;
  padding: 32px;
  border: 1px solid #ede3d4;
  border-radius: 2px;
  text-decoration: none;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;

  & h1 {
    margin-top: 0px;
    color: #c0392b;
  }
`

const ContentBlock = ({ children }) => (
  <BlockItem>{children}</BlockItem>
)

export default ContentBlock
