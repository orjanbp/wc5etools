import React from "react"
import styled from "styled-components"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import breakpoints from "../_partials/breakpoints"

import { BestiaryStore } from "../stores/bestiary-store"

const NameSearch = styled.input``

const CreatureFilter = () => {
  const { state, dispatch } = React.useContext(BestiaryStore)

  const filterNameAction = (name) => {
    return dispatch({
      type: "FILTER_NAME",
      payload: name
    })
  }

  return (
    <>
      {/* {console.log(state)} */}
      <NameSearch
        type='text'
        placeholder='Search Creature Names'
        onChange={(e) => filterNameAction(e.target.value)}
      />
    </>
  )
}

export default CreatureFilter
