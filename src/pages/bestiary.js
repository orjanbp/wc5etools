import React from "react"

import { Layout, LayoutInner } from "../components/layout"
import SEO from "../components/seo"
import AllCreatures from "../components/bestiary/views/all-creatures"

const BestiaryPage = () => (
  <Layout>
    <SEO title="Bestiary" />
    <LayoutInner>
      <AllCreatures />
    </LayoutInner>
  </Layout>
)

export default BestiaryPage
