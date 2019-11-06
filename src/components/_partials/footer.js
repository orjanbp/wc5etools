import React from "react"
import styled from "styled-components"

const FooterBar = styled.footer`
  padding: 24px 32px;
  background-color: #373737;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.12);
  text-align: center;
  color: #f7f7f7;
`

const Footer = () => (
  <FooterBar>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </FooterBar>
)

export default Footer
