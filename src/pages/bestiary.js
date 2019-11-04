import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AllCreatures from "../components/home/all-creatures"

const BestiaryPage = () => (
  <Layout>
    <SEO title="Bestiary" />
    <AllCreatures />
  </Layout>
)

export default BestiaryPage
