import React from "react"

const BestiaryStore = React.createContext()

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

function BestiaryStoreProvider(props) {
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
