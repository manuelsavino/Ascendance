import React from "react"
import {
  StyledTopFooter,
  StyledOuterFooter,
  StyledBottomFooter,
} from "./footerStyled"

export default function Footer({ children }) {
  return (
    <StyledOuterFooter>
      <StyledTopFooter />
      <StyledBottomFooter>{children}</StyledBottomFooter>
    </StyledOuterFooter>
  )
}
