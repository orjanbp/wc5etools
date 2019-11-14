import React from "react"

import { BestiaryStoreProvider } from "./stores/bestiary-store"
import CreatureFilterForm from "./components/creature-filter-form"
import AllCreatures from "./views/all-creatures"

const BestiaryApp = () => (
  <BestiaryStoreProvider>
    <CreatureFilterForm />
    <AllCreatures />
  </BestiaryStoreProvider>
)

export default BestiaryApp
