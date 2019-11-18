import React from "react"
import styled, { css } from "styled-components"
import _ from "lodash"

const CreatureCheckboxOuter = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none !important;
`

const CreatureCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  background-color: #323232;
  border: 2px solid transparent;
  border-radius: 3px;
  box-sizing: border-box;

  & span {
    color: #fff;
    bottom: 0;
    font-size: 1.2rem;
  }

  ${props => props.checked && css`
    border-color: #896F08;

    & span {
      color: #f4d03e;
    }
  `}
`

const CreatureFilterCheckbox = ({ key = "", checked = null, label = "", onChange = null }) => {
  console.log(checked)
  return (
    <CreatureCheckboxOuter key={key}>
      <HiddenCheckbox id={key} onChange={onChange} checked={checked} />
      <CreatureCheckbox checked={checked}>
        <span>{_.toUpper(label)}</span>
      </CreatureCheckbox>
    </CreatureCheckboxOuter>
  )
}

export default CreatureFilterCheckbox
