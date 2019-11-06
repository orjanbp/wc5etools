import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LeadText from "../components/_partials/lead-text"
import {
  BlockLinkGroup,
  BlockLinkItem
} from "../components/_partials/block-link"

import ButtonLink from "../components/_partials/button-link"

const IndexButtonGroup = styled.div`
  margin-top: 32px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LeadText>
      <h1>Warcraft 5E Tools</h1>
      <p>
        This is a collection of tools that are intended to be used with a
        community-made Warcraft supplement for Dungeons & Dragons 5th Edition.
      </p>
      <IndexButtonGroup>
        <ButtonLink href="https://drive.google.com/drive/folders/1kVoAMR8TiO3CXFYcigFN2B6zk62xcnv9">
          Get the Books
        </ButtonLink>
        <ButtonLink href="https://www.reddit.com/r/wc5e/">
          Visit Reddit
        </ButtonLink>
      </IndexButtonGroup>
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
