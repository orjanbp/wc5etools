/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "typeface-montserrat"
import "typeface-josefin-sans"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faReddit } from "@fortawesome/free-brands-svg-icons"

library.add({ faChevronLeft, faGithub, faReddit })
