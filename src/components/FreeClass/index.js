import React from "react"
import { SubHeading, CopyLinkE } from "../common/copy"
import { FreeClassContainer, TryButton } from "./freeClassStyled"

export default function FreeClass({ style }) {
  return (
    <FreeClassContainer>
      <SubHeading secondary style={{ marginBottom: "20px" }}>
        Do you want to book Free {style} class today? Call us
        <CopyLinkE href="tel:786-571-7778"> 786-571-7778</CopyLinkE> or click
        below.
      </SubHeading>
      <TryButton to="/">
        <span>Try a Free Class</span>
      </TryButton>
    </FreeClassContainer>
  )
}
