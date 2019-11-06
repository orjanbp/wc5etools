import React from "react"
import styled from "styled-components"

const LeadTextBlock = styled.div`
  max-width: 760px;
  margin-bottom: 64px;

  & h1 {
    color: #c0392b;
  }

  & p {
    font-size: 2rem;
  }
`

const LeadText = ({ children }) => <LeadTextBlock>{children}</LeadTextBlock>

export default LeadText
