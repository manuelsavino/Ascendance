import React from "react"
import Global from "./Global/Global"
import colors from "./common/colors"
import Logo from "../images/logoWhite.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"

import "./layout.css"
import styled from "styled-components"

const PlainNav = styled.div`
  width: 100%;
  background: ${colors.primary};
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 8px 0;
  & > div {
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
      justify-content: space-around;
    }
    & > img {
      width: 120px;
    }
    & > a {
      color: white;
      text-decoration: none;
    }
  }
`

const LandingLayout = ({ children }) => {
  return (
    <>
      <PlainNav>
        <div>
          <img src={Logo} />
          <a href="tel:786-571-7778">
            <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: "5px" }} />
            786-571-7778
          </a>
        </div>
      </PlainNav>
      <Global />
      <main>{children}</main>
    </>
  )
}

export default LandingLayout
