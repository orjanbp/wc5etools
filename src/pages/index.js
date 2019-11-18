import React from "react"

import { Layout, LayoutInner } from "../components/layout"
import SEO from "../components/seo"

import { LeadBanner, LeadText, LeadButtons } from "../components/lead-banner"
import { LinkBlockHeader, LinkBlockGroup, LinkBlockItem } from "../components/link-block"
import { ButtonExternalLink } from "../components/button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LeadBanner>
      <LeadText>
        <h1>Warcraft 5E Tools</h1>
        <p>
          This is a collection of tools that are intended to be used with a
          community-made Warcraft supplement for Dungeons & Dragons 5th Edition.
        </p>
      </LeadText>
      <LeadButtons>
        <ButtonExternalLink big href="https://drive.google.com/drive/folders/1kVoAMR8TiO3CXFYcigFN2B6zk62xcnv9">
          Get the Books
        </ButtonExternalLink>
        <ButtonExternalLink big href="https://www.reddit.com/r/wc5e/">
          Visit Reddit
        </ButtonExternalLink>
      </LeadButtons>
    </LeadBanner>
    <LayoutInner>
      <LinkBlockHeader>Tool Overview</LinkBlockHeader>
      <LinkBlockGroup>
        <LinkBlockItem to="/bestiary">
          <h3>Bestiary</h3>
          <p>
            Online creature stat lookup. Some are from the 5E SRD, while the
            majority are new Warcraft creatures from this supplement.
          </p>
        </LinkBlockItem>
      </LinkBlockGroup>
    </LayoutInner>
  </Layout>
)

export default IndexPage
