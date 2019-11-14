import React from "react"
import styled from "styled-components"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import breakpoints from "../_partials/breakpoints"

import { BestiaryStore } from "../stores/bestiary-store"
import { getCreatureTypes } from "../data/creature-types"

const NameSearch = styled.input``

const CreatureFilterForm = () => {
  const { state, dispatch } = React.useContext(BestiaryStore)
  const creatureTypes = getCreatureTypes()

  const filterNameAction = (name) => {
    return dispatch({
      type: "FILTER_NAME",
      payload: name
    })
  }

  return (
    <>
      {console.log(creatureTypes)}
      <NameSearch
        type='text'
        placeholder='Search Creature Names'
        onChange={(e) => filterNameAction(e.target.value)}
      />
    </>
  )
}

export default CreatureFilterForm
