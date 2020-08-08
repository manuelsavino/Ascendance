import styled from "styled-components"
import PinkWave from "../../images/footerWave.svg"
import Caret from "../../images/caret-down.svg"
import { Link } from "gatsby"

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
  transition: all 0.1s ease;
  @media (max-width: 768px) {
    transform-origin: top center;
    margin-top: 0 !important;
    transform: ${props => (props.active ? "scale(1)" : "scaleY(0)")};
    height: ${props => (props.active ? "auto" : "0")};
    margin-bottom: ${props => (props.active ? "10px" : "0")};
    & > li {
      /* margin-bottom: 10px;
      font-size: 1rem; */
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
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    &:last-child > :first-child {
      border-top: solid 1px #fff;
    }
  }
`

export const ListItemTitlet = styled.h5`
  font-weight: 600;
  font-size: 1.1rem;
  padding-bottom: 8px;
  color: #fff;

  @media (max-width: 768px) {
    margin-top: 0 !important;
    /* border-top: ${props => (props.active ? "none" : "solid 1px #fff")}; */
    border-top: solid 1px #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    &::after {
      content: "";
      transition: all 0.25s ease;
      background-image: url(${Caret});
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
