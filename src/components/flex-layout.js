import styled from "styled-components"

const FlexRow = styled.div`
  display: flex;
  margin-left: -8px;
  margin-right: -8px;
`

const FlexCol = styled.div`
  flex-grow: ${(props) => (props.md ? props.md : 1)};
  flex-shrink: 1;
  margin-left: 8px;
  margin-right: 8px;
`

export { FlexRow, FlexCol }
