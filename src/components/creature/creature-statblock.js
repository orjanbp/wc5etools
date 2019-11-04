import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import _ from "lodash"

const StatblockWrap = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;

  & .creature-statblock {
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
  }
`
const CreatureStatblock = ({ children }) => (
  <StatblockWrap>{children}</StatblockWrap>
)

export default CreatureStatblock
