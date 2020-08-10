import React from "react"

import { OuterModal, InnerModal, CloseButton } from "./modalStyled"

export const Modal = ({ children, close }) => {
  return (
    <OuterModal>
      <InnerModal>
        <CloseButton
          onClick={() => {
            close()
          }}
        />
        {children}
      </InnerModal>
    </OuterModal>
  )
}
