import styled from "styled-components"

const FlexRow = styled.div`
  display: flex;
  margin-left: -4px;
  margin-right: -4px;

  & + & {
    margin-top: 16px;
  }
`

const FlexCol = styled.div`
  flex-grow: ${(props) => (props.md ? props.md : 1)};
  flex-shrink: 1;
  margin-left: 4px;
  margin-right: 4px;
`

export { FlexRow, FlexCol }
