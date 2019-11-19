/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import { BestiaryFilterStoreProvider } from "./src/stores/bestiary-filter-store"

export const wrapRootElement = ({ element }) => {
  return <BestiaryFilterStoreProvider>{element}</BestiaryFilterStoreProvider>
}
