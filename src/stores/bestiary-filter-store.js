import React from "react"
import _ from "lodash"

const BestiaryFilterStore = React.createContext()

const initialState = {
  name: "",
  type: []
}

const updateTypeFilter = (typeFilter, payload) => {
  let newTypeFilter = [...typeFilter]

  if (payload.checked) {
    newTypeFilter.push(payload.type)
  } else {
    _.remove(newTypeFilter, (type) => {
      return type === payload.type
    })
  }

  return newTypeFilter
}

const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_NAME":
      return { ...state, name: action.payload }
    case "FILTER_TYPE":
      return { ...state, type: updateTypeFilter(state.type, action.payload) }
    case "RESET_FILTER":
      return { ...initialState }
    default:
      return state
  }
}

const BestiaryFilterStoreProvider = (props) => {
  const [filterState, dispatch] = React.useReducer(reducer, initialState)
  const value = { filterState, dispatch }

  console.log("BestiaryFilterStoreProvider Engaged", filterState)

  return <BestiaryFilterStore.Provider value={value}>{props.children}</BestiaryFilterStore.Provider>
}

export { BestiaryFilterStore, BestiaryFilterStoreProvider }
