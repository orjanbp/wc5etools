import React from "react"

import { Layout, LayoutInner } from "../../components/layout"
import CreatureFilterForm from "./components/creature-filter-form"
import AllCreatures from "./views/all-creatures"

const BestiaryApp = () => (
  <Layout>
    <LayoutInner>
      <CreatureFilterForm />
      <AllCreatures />
    </LayoutInner>
  </Layout>
)

export default BestiaryApp
