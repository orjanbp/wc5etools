import React from "react"

import { FilterStoreProvider } from "./stores/filter-store"
import CreatureFilterForm from "./components/creature-filter-form"
import AllCreatures from "./views/all-creatures"

const BestiaryApp = () => (
  <FilterStoreProvider>
    <CreatureFilterForm />
    <AllCreatures />
  </FilterStoreProvider>
)

export default BestiaryApp
