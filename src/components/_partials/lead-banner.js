import styled from "styled-components"
import breakpoints from "./breakpoints"

const LeadText = styled.div`
  & h1 {
    color: #c0392b;
  }

  & p {
    font-size: 2rem;
    font-weight: 300;
    color: #fafafa;
  }
`

const LeadButtons = styled.div`
  margin-top: 40px;
`

const LeadBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #333;
  padding: 128px 0px;
  box-sizing: border-box;

  & ${LeadText}, & ${LeadButtons} {
    width: 100%;
    max-width: 960px;
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
  }

  @media ${breakpoints.xsmall} {
    padding: 64px 0px;
  }
`

export { LeadBanner, LeadText, LeadButtons }
