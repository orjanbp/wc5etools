import React from "react"
import styled from "styled-components"
import _ from "lodash"

const CreatureCheckbox = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`

const CreatureCheckboxIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  background-color: #333;
  border-radius: 4px;

  & span {
    color: #fff;
    bottom: 0;
    font-size: 1.2rem;
  }
`

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none !important;

  &:checked ~ ${CreatureCheckboxIcon} {
    background-color: red;
  }
`

const CreatureFilterCheckbox = ({ key = "", label = "", onChange = null }) => {
  return (
    <CreatureCheckbox key={key}>
      <HiddenCheckbox id={key} onChange={onChange} />
      <CreatureCheckboxIcon>
        <span>{_.toUpper(label)}</span>
      </CreatureCheckboxIcon>
    </CreatureCheckbox>
  )
}

export default CreatureFilterCheckbox
