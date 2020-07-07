import styled from "styled-components"

export const OuterModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
`

export const InnerModal = styled.div`
  width: 700px;
  height: 600px;
  max-height: 95vh;
  background: white;
  border-radius: 5px;
  position: relative;
  overflow-y: scroll;
`
export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  opacity: 0.5;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 10px;
  background: none;
  border: none;
  &&::before,
  &&::after {
    position: absolute;
    left: 9px;
    top: 2px;
    content: " ";
    height: 15px;
    width: 2px;
    background-color: #000;
  }
  &&::before {
    transform: rotate(45deg);
  }
  &&::after {
    transform: rotate(-45deg);
  }
`
