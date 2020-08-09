import React from "react"
import { SubHeading } from "../common/copy"
import { FreeClassContainer, TryButton } from "./styled"

export default function FreeClass({ style }) {
  return (
    <FreeClassContainer>
      <SubHeading secondary style={{ marginBottom: "20px" }}>
        Do you want to book Free {style} class today? Call us{" "}
        <a href="tel:786-571-7778">786-571-7778</a> or click below.
      </SubHeading>
      <TryButton to="/">
        <span>Try a Free Class</span>
      </TryButton>
    </FreeClassContainer>
  )
}
