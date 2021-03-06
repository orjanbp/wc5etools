import React from "react"
import styled from "styled-components"
import _ from "lodash"
import breakpoints from "../../../components/breakpoints"

import { BestiaryFilterStore } from "../../../stores/bestiary-filter-store"
import { getCreatureTypes } from "../data/creature-types"

import { FlexRow, FlexCol } from "../../../components/flex-layout"
import CreatureFilterCheckbox from "./creature-filter-checkbox"
import { ButtonEventHandler } from "../../../components/button"

const CreatureFilterContainer = styled.div`
  margin-bottom: 56px;
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

  @media ${breakpoints.med} {
    & > * {
      width: calc((100% / 4) - 4px);
    }
  }

  @media ${breakpoints.small} {
    & > * {
      width: calc((100% / 2) - 4px);
    }
  }
`

const NameSearch = styled.input`
  height: 48px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 3px;
  margin: 0px;
`

const CreatureFilterForm = () => {
  const { filterState, dispatch } = React.useContext(BestiaryFilterStore)
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

  const resetFilterAction = () => {
    return dispatch({
      type: "RESET_FILTER",
      payload: null
    })
  }

  return (
    <CreatureFilterContainer>
      <FlexRow>
        <FlexCol md={12}>
          <CreatureTypeSelection>
            {creatureTypes.map((type) => {
              return (
                <CreatureFilterCheckbox
                  key={`creature-type-${type}`}
                  label={type}
                  checked={filterState.type.includes(type)}
                  onChange={(e) => {
                    filterTypeAction(type, e.target.checked)
                  }}
                />
              )
            })}
          </CreatureTypeSelection>
        </FlexCol>
        <FlexCol lg={9} md={8} sm={12}>
          <NameSearch
            type='text'
            value={filterState.name}
            placeholder='Search Creature Names'
            onChange={(e) => filterNameAction(e.target.value)}
          />
        </FlexCol>
        <FlexCol lg={3} md={4} sm={12}>
          <ButtonEventHandler style={{ width: "100%" }} onClick={() => resetFilterAction()}>
            Reset Filters
          </ButtonEventHandler>
        </FlexCol>
      </FlexRow>
    </CreatureFilterContainer>
  )
}

export default CreatureFilterForm
