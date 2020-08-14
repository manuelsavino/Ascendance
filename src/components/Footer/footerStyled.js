import styled from "styled-components"
import PinkWave from "../../images/footerWave.svg"
import Caret from "../../images/caret-down.svg"
import { Link } from "gatsby"
import { TryButton } from "../FreeClass/freeClassStyled"
import colors from "../common/colors"

export const StyledOuterFooter = styled.div`
  background-color: #f8f8f8;
  background-image: radial-gradient(#0000000d 1px, #0000 0),
    radial-gradient(#0000000d 1px, #0000 0);
  background-size: 40px 40px, 40px 40px;
  background-position: 0 0, 20px 20px;
  overflow: hidden;
`

export const FooterArea = styled.ul`
  list-style: none;
  color: white;
  transition: all 0.15s ease-in-out;
  @media (max-width: 768px) {
    transform-origin: top center;
    margin-top: 0 !important;
    transform: ${props =>
      props.expanded || props.active ? "scale(1)" : "scaleY(0)"};
    height: ${props => (props.expanded || props.active ? "auto" : "0")};
    margin-bottom: ${props => (props.expanded || props.active ? "10px" : "0")};
    text-align: ${props => (props.expanded ? "center" : "left")};
    & > li {
      padding: ${props => (props.expanded ? "0" : "5px 0")};
    }
  }
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
  background: ${colors.primary};
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
  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
  }
`

export const MobileImportant = styled.div`
  @media (max-width: 768px) {
    margin: auto;
    margin-bottom: 10px;
  }
`

export const ListItemTitlet = styled.h5`
  font-weight: 600;
  font-size: 1.1rem;
  padding-bottom: 8px;
  color: #fff;
  @media (max-width: 768px) {
    margin-top: 0 !important;
    border-top: ${props =>
      props.expanded ? "none" : "solid 1px rgba(255,255,255,.4)"};
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
    text-align: ${props => (props.expanded ? "center" : "left")};
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: ${props => (props.active ? "600" : "500")};
    &::after {
      content: "";
      transition: all 0.25s ease;
      background-image: ${props => (props.expanded ? "none" : `url(${Caret})`)};
      position: absolute;
      right: 10px;
      width: 15px;
      height: 15px;
      top: 30%;
      transform: ${props => (props.active ? "rotate(180deg)" : "rotate(0deg)")};
    }
  }
`
export const ListItem = styled.li`
  font-weight: 300;
  padding-bottom: 5px;
  font-size: 0.8rem;
  & > a {
    color: white;
    text-decoration: none;
  }
`
export const ListLink = styled(Link)`
  font-weight: 300;
  padding-bottom: 5px;
  font-size: 0.8rem;
  color: #fff;
  text-decoration: none;
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
  @media (max-width: 768px) {
    margin: auto;
  }
`
export const Social = styled.div`
  & > a {
    color: white;
    padding-right: 10px;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
    text-align: center;
  }
`

export const Copy = styled.p`
  color: white;
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const FooterTryFreeClass = styled(TryButton)`
  display: none;
  background-color: ${colors.secondary};
  background-image: linear-gradient(
    150deg,
    ${colors.secondary} 50%,
    transparent 50%
  );
  @media (max-width: 768px) {
    display: inline;
    align-self: center;
    display: ${props => (props.hidefreeflass ? "none" : "block")};
  }
`
