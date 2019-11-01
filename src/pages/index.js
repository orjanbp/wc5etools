import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AllCreatures from "../components/home/all-creatures"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h5>[Creature type filter placeholder]</h5>

    <h5>[Creature sort by placeholder]</h5>

    <h5>[Creature jump to placeholder]</h5> */}

    <div>
      <AllCreatures />
    </div>
  </Layout>
)

export default IndexPage
