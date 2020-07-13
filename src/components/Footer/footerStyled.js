import styled from "styled-components"
import PinkWave from "../../images/footerWave.svg"

export const StyledOuterFooter = styled.div`
  background-color: #f8f8f8;
  background-image: radial-gradient(#0000000d 1px, #0000 0),
    radial-gradient(#0000000d 1px, #0000 0);
  background-size: 40px 40px, 40px 40px;
  background-position: 0 0, 20px 20px;
`

export const StyledTopFooter = styled.div`
  width: 100vw;
  height: 100px;
  background-size: cover;
  height: 110px;
  background-image: url(${PinkWave});
  background-repeat: no-repeat;
  background-position: top;
`
export const StyledBottomFooter = styled.div`
  background: #ea3ba1;
  width: 100vw;
  height: 200px;
`
