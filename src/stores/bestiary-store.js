import React from "react"

export const BestiaryStore = React.createContext()

const initialState = {
  filter: {
    name: "",
    type: []
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "FILTER_NAME":
      return { ...state, filter: { ...state.filter, name: action.payload } }
    default:
      return state
  }
}

export function BestiaryStoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <BestiaryStore.Provider value={value}>{props.children}</BestiaryStore.Provider>
}

// import { useState } from "react"
// import createUseContext from "constate"

// const useFilter = () => {
//   const [filter, setFilter] = useState()

//   const updateFilterName = (filter, name) => {
//     const newFilter = { ...filter }
//     newFilter.name = name
//     setFilter(newFilter)
//     console.log(name)
//   }

//   return { filter, updateFilterName }
// }

// export const useBestiary = createUseContext(useFilter)
