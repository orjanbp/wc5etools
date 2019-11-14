import React from "react"

import { BestiaryStoreProvider } from "./stores/bestiary-store"
import CreatureFilter from "./components/creature-filter"
import AllCreatures from "./views/all-creatures"

const BestiaryApp = () => (
  <BestiaryStoreProvider>
    <CreatureFilter />
    <AllCreatures />
  </BestiaryStoreProvider>
)

export default BestiaryApp
