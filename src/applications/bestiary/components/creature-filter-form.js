import React from "react"
import styled from "styled-components"
import _ from "lodash"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import breakpoints from "../_partials/breakpoints"

import { BestiaryStore } from "../stores/bestiary-store"
import { getCreatureTypes } from "../data/creature-types"

const CreatureFilterContainer = styled.div`
  margin-bottom: 64px;
`

const CreatureTypeSelection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -4px;
  margin-right: -4px;
`

const CreatureCheckbox = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc((100% / 6) - 8px);
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 8px;
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

const NameSearch = styled.input`
  height: 48px;
  width: calc(50% - 4px);
  margin-top: 16px;
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

const CreatureFilterForm = () => {
  const { state, dispatch } = React.useContext(BestiaryStore)
  const creatureTypes = getCreatureTypes()

  const filterTypeAction = (type, checked) => {
    return dispatch({
      type: "FILTER_TYPE",
      payload: {
        type: type,
        checked: checked
      }
    })
  }

  const filterNameAction = (name) => {
    return dispatch({
      type: "FILTER_NAME",
      payload: name
    })
  }

  return (
    <CreatureFilterContainer>
      <CreatureTypeSelection>
        {creatureTypes.map((type) => {
          return (
            <CreatureFilterCheckbox
              key={`creature-type-${type}`}
              label={type}
              onChange={(e) => {
                filterTypeAction(type, e.target.checked)
              }}
            />
          )
        })}
      </CreatureTypeSelection>
      <NameSearch
        type='text'
        placeholder='Search Creature Names'
        onChange={(e) => filterNameAction(e.target.value)}
      />
    </CreatureFilterContainer>
  )
}

export default CreatureFilterForm
