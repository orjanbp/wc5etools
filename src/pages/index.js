import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LeadText from "../components/_partials/lead-text"
import { BlockLinkGroup, BlockLinkItem } from "../components/_partials/block-link"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LeadText>
      <h1>Warcraft 5E Tools</h1>
      <p>
        A collection of tools for use with a community-made Warcraft supplement
        for Dungeons & Dragons 5th Edition.
      </p>
    </LeadText>
    <BlockLinkGroup>
      <BlockLinkItem to="/bestiary">
        <h3>Bestiary</h3>
        <p>
          Online lookup of all statblocks in the supplement. Some are brought in
          from the 5E SRD, though the majority are unique Warcraft creatures and
          NPCs.
        </p>
      </BlockLinkItem>
    </BlockLinkGroup>
  </Layout>
)

export default IndexPage
