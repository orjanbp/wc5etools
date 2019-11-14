import React from "react"
import { Layout, LayoutInner } from "../components/layout"
import SEO from "../components/seo"

import { BestiaryStoreProvider } from "../stores/bestiary-store"
import CreatureFilter from "../components/bestiary/creature-filter"
import AllCreatures from "../components/bestiary/views/all-creatures"

const BestiaryPage = () => (
  <Layout>
    <SEO title="Bestiary" />
    <LayoutInner>
      <BestiaryStoreProvider>
        <CreatureFilter />
        <AllCreatures />
      </BestiaryStoreProvider>
    </LayoutInner>
  </Layout>
)

export default BestiaryPage
