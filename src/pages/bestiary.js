import React from "react"
import { Layout, LayoutInner } from "../components/layout"
import SEO from "../components/seo"

import BestiaryApp from "../applications/bestiary/app"

const BestiaryPage = () => (
  <Layout>
    <SEO title='Bestiary' />
    <LayoutInner>
      <BestiaryApp />
    </LayoutInner>
  </Layout>
)

export default BestiaryPage
