import styled from "styled-components"
import breakpoints from "./breakpoints"

import BannerImageDark from "../../images/bannerimagedark.jpg"

const LeadText = styled.div`
  & h1 {
    color: #c0392b;
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.6));
  }

  & p {
    max-width: 600px;
    font-size: 2rem;
    font-weight: 300;
    color: #fafafa;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.6))
      drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.6));
  }

  @media ${breakpoints.xsmall} {
    & p {
      font-size: 1.8rem;
    }
  }
`

const LeadButtons = styled.div`
  margin-top: 40px;

  & a {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  }
`

const LeadBanner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #333;
  background-image: url(${BannerImageDark});
  background-size: cover;
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
