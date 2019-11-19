/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"

import "typeface-montserrat"
import "typeface-josefin-sans"
import "./src/css/normalize.css"
import "./src/css/layout.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faReddit } from "@fortawesome/free-brands-svg-icons"

import { BestiaryFilterStoreProvider } from "./src/stores/bestiary-filter-store"

library.add({ faChevronLeft, faGithub, faReddit })

export const wrapRootElement = ({ element }) => {
  return <BestiaryFilterStoreProvider>{element}</BestiaryFilterStoreProvider>
}
