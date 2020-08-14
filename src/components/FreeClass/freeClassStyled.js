import styled from "styled-components"
import { Link } from "gatsby"
import colors from "../common/colors"

export const FreeClassContainer = styled.div`
  padding: 20px 0;
  & > * > a {
    text-decoration: none;
    font-weight: inherit;
    font-family: inherit;
  }
  & > p {
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    margin-top: 20px;
    color: #393e46;
  }
`

export const TryButton = styled(Link)`
  background-color: ${props =>
    props.schedule ? colors.secondary : colors.primary};
  background-image: ${props =>
    props.schedule
      ? props.i % 2 === 0
        ? `linear-gradient(150deg, ${colors.lightPink} 50%, transparent 50%)`
        : `linear-gradient(150deg, ${colors.primary} 50%, transparent 50%)`
      : `linear-gradient(150deg, ${colors.secondary} 50%, transparent 50%)`};
  background-position: 100%;
  background-size: 400%;
  transition-property: background, color;
  transition-duration: ${props => (props.schedule ? "350ms" : "500ms")};
  transition-timing-function: ease-out;
  position: relative;
  color: #fff;
  padding: ${props => (props.schedule ? "5px;" : "10px 15px")};
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
  font-size: ${props => (props.schedule ? "0.7rem" : "1rem")};
  text-decoration: none;
  &:hover {
    background-position: 0;
    cursor: pointer;
    color: ${props => (props.i % 2 === 0 ? colors.primary : "#FFF")};
  }
`
