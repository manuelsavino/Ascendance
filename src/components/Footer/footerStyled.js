import styled from "styled-components"
import PinkWave from "../../images/footerWave.svg"

export const StyledOuterFooter = styled.div`
  background-color: #f8f8f8;
  background-image: radial-gradient(#0000000d 1px, #0000 0),
    radial-gradient(#0000000d 1px, #0000 0);
  background-size: 40px 40px, 40px 40px;
  background-position: 0 0, 20px 20px;
  overflow: hidden;
`

export const StyledTopFooter = styled.div`
  width: 100%;
  height: 100px;
  background-size: cover;
  height: 110px;
  background-image: url(${PinkWave});
  background-repeat: no-repeat;
  background-position: top;
`
export const StyledBottomFooter = styled.div`
  background: #ea3ba1;
  width: 100%;
  height: max-content;
  margin-top: -1px;
  padding-top: 15px;
`

export const StyledInnerFooter = styled.div`
  width: 75%;
  margin: auto;
  height: max-content;
  display: flex;
  justify-content: ${props => props.justify};
  padding-bottom: 20px;
`

export const FooterArea = styled.ul`
  list-style: none;
  color: white;
`
export const ListItemTitle = styled.li`
  font-weight: 600;
  font-size: 1.1rem;
  padding-bottom: 8px;
`

export const ListItem = styled.li`
  font-weight: 300;
  padding-bottom: 5px;
  font-size: 0.8rem;
`
export const Separator = styled.div`
  width: 100%;
  border-top: solid 1px rgba(255, 255, 255, 0.4);
  width: 75%;
  margin: auto;
  padding-bottom: 15px;
`
export const LogoImage = styled.img`
  width: 200px;
`
export const Social = styled.div`
  & > a {
    color: white;
    padding-right: 10px;
  }
`

export const Copy = styled.p`
  color: white;
`
