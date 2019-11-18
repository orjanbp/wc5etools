import styled from "styled-components"
import breakpoints from "./breakpoints"

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -4px;
  margin-right: -4px;

  & + & {
    margin-top: 16px;
  }
`

const FlexCol = styled.div.attrs((props) => ({
  sm: props.sm ? props.sm : 12,
  md: props.md ? props.md : props.sm ? props.sm : 12,
  lg: props.lg ? props.lg : props.md ? props.md : props.sm ? props.sm : 12  
}))`
  width: ${(props) => `calc(100% / 12 * ${props.lg} - 8px)`};
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 16px;

  @media ${breakpoints.med} {
    width: ${(props) => `calc(100% / 12 * ${props.md} - 8px)`};
  }

  @media ${breakpoints.small} {
    width: ${(props) => `calc(100% / 12 * ${props.sm} - 8px)`};
  }
`

export { FlexRow, FlexCol }
