import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterBar = styled.footer`
  display: flex;
  background-color: #373737;
  height: 64px;
  padding: 0px 32px;
  border-top: 1px solid #1E1E1E;
  font-size: 1.4rem;
  text-align: center;
  color: #f7f7f7;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.12);
  justify-content: center;
`

const FooterBarLink = styled.a`
  align-self: center;
  padding: 12px 16px;
  color: #f4d03e;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    color: #faecb1;
  }
`

const Footer = () => (
  <FooterBar>
    <FooterBarLink as={Link} to="/legal">
      Legal stuff
    </FooterBarLink>
    <FooterBarLink href="https://www.gatsbyjs.org" target="_blank">
      Built with Gatsby
    </FooterBarLink>
  </FooterBar>
)

export default Footer
