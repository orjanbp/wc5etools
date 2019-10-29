import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AllCreatures from "../components/home/all-creatures"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>[Creature type filter placeholder]</h3>

    <h3>[Creature sort by placeholder]</h3>

    <h3>[Creature jump to placeholder]</h3>

    <div>
      <AllCreatures />
    </div>
  </Layout>
)

export default IndexPage
