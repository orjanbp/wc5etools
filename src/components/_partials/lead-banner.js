import styled from "styled-components"

const LeadBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #333;
  padding: 128px 32px;
`

const LeadText = styled.div`
  width: 100%;
  max-width: 760px;

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
  width: 100%;
  max-width: 760px;
  margin-top: 40px;
`

export { LeadBanner, LeadText, LeadButtons }
