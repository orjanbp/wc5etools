import React from "react"
import styled from "styled-components"
import _ from "lodash"
import breakpoints from "../../../components/breakpoints"

const Statblock = styled.div`
  background-color: #fbfaf9;
  padding: 48px;
  border: 1px solid #ede3d4;
  border-radius: 2px;
  text-decoration: none;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);

  & h2 {
    color: #c0392b;
  }

  & h3 {
    margin-top: 2.4rem;
    margin-bottom: 1rem;
  }

  & > hr {
    display: none;
  }

  & li {
    list-style: none;
  }

  & hr {
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
  }

  & blockquote {
    margin: 0px;
  }

  & table {
    width: 100%;
  }

  & th {
    color: #c0392b;
    padding: 0px 12px 8px;
  }

  & td {
    padding: 0px 12px;
  }

  @media ${breakpoints.med} {
    padding: 32px;
  }

  @media ${breakpoints.xsmall} {
    padding: 16px;

    & p, & li {
      font-size: 1.4rem;
    }

    & th, & td {
      padding-left: 8px;
      padding-right: 8px;
    }

    & td {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`
const CreatureStatblock = ({ html }) => (
  <Statblock dangerouslySetInnerHTML={{ __html: html }} />
)

export default CreatureStatblock
