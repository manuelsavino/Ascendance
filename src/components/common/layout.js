import styled from "styled-components"
import { Link } from "gatsby"
import colors from "./colors"

export const Container = styled.div`
  margin: 85px auto 0;
  padding-bottom: ${props => (props.pb ? props.pb : "80px")};
  width: ${props => (props.fullWidth ? "90%" : "1400px")};
  max-width: ${props => (props.fullWidth ? "1800px" : "1400px")};
  display: ${props => (props.flex ? "flex" : "block")};
  justify-content: center;
  align-items: center;
  flex-direction: ${props => (props.column ? "column" : "row")};
  min-height: ${props => (props.height ? props.height : "auto")};
  @media screen and (max-width: 1400px) {
    max-width: ${props => (props.fullWidth ? "1300px" : "1400px")};
  }
  @media screen and (max-width: 1400px) {
    max-width: ${props => (props.fullWidth ? "1300px" : "1400px")};
  }
  @media screen and (max-width: 1300px) {
    max-width: ${props => (props.fullWidth ? "90%" : "1100px")};
  }
  @media screen and (max-width: 1000px) {
    max-width: ${props => (props.fullWidth ? "90%" : "90%")};
  }
`
export const Button = styled(Link)`
  background-color: ${colors.primary};
  background-image: linear-gradient(
    150deg,
    ${colors.secondary} 50%,
    transparent 50%
  );
  background-position: 100%;
  background-size: 400%;
  transition: background 500ms ease-in-out;
  position: relative;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    background-position: 0;
    cursor: pointer;
  }
`

export const RegButton = styled.button`
  background-color: ${colors.primary};
  background-image: linear-gradient(
    150deg,
    ${colors.secondary} 50%,
    transparent 50%
  );
  background-position: 100%;
  background-size: 400%;
  transition: background 500ms ease-in-out;
  position: relative;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    background-position: 0;
    cursor: pointer;
  }
`

export const VideoContainer = styled.div`
  margin: auto;
  width: 75%;
  padding-top: 30px;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const SingleVideoCotnainer = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  & > iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`
