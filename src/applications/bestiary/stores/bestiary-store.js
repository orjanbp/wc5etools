import React from "react"
import _ from "lodash"

const BestiaryStore = React.createContext()

const initialState = {
  filter: {
    name: "",
    type: []
  }
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
      return { ...state, filter: { ...state.filter, name: action.payload } }
    case "FILTER_TYPE":
      return {
        ...state,
        filter: { ...state.filter, type: updateTypeFilter(state.filter.type, action.payload) }
      }
    default:
      return state
  }
}

const BestiaryStoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <BestiaryStore.Provider value={value}>{props.children}</BestiaryStore.Provider>
}

export { BestiaryStore, BestiaryStoreProvider }

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
