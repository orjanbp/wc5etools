import React from "react"
import styled from "styled-components"
import _ from "lodash"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import breakpoints from "../_partials/breakpoints"

import { BestiaryStore } from "../stores/bestiary-store"
import { getCreatureTypes } from "../data/creature-types"

import { FlexRow, FlexCol } from "../../../components/flex-layout"
import CreatureFilterCheckbox from "./creature-filter-checkbox"

const CreatureFilterContainer = styled.div`
  margin-bottom: 64px;
`

const CreatureTypeSelection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  & > * {
    width: calc((100% / 6) - 4px);
    margin-bottom: 4px;
  }
`

const NameSearch = styled.input`
  height: 48px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  margin-top: 16px;
  margin-bottom: 0px;
`

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
      <FlexRow>
        <FlexCol as={CreatureTypeSelection} md={12}>
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
        </FlexCol>
      </FlexRow>
      <FlexRow>
        <FlexCol md={9}>
          <NameSearch
            type='text'
            placeholder='Search Creature Names'
            onChange={(e) => filterNameAction(e.target.value)}
          />
        </FlexCol>
        <FlexCol md={3}>
          <button>Reset Filters</button>
        </FlexCol>
      </FlexRow>
    </CreatureFilterContainer>
  )
}

export default CreatureFilterForm
