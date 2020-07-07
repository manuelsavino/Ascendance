import React from "react"

import { OuterModal, InnerModal, CloseButton } from "./styled"

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
