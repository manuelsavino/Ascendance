import styled from "styled-components"
import colors from "../common/colors"

export const OuterSocial = styled.div`
  width: max-content;
  margin: auto;
  padding-bottom: 50px;
`
export const FollowUs = styled.a`
  color: ${colors.secondary};
  text-decoration: none;
  & > span {
    color: ${colors.primary};
  }
`

export const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding-bottom: 10px;
  width: calc(max-content +100px);
  margin: auto;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 900px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
    grid-template-columns: 1fr 1fr;
  }
`

export const PostImage = styled.a`
  min-width: 20%;
  width: 240px;
  height: 240px;
  min-height: 20%;
  background-image: url(${props => props.image});
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`
export const SocialHeadline = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #545454;
  font-size: 3rem;
  padding-bottom: 20px;
  padding-top: 20px;
  font-weight: 400;

  & > svg {
    margin-right: 10px;
    color: ${colors.primary};
  }
  @media (max-width: 768px) {
    font-size: 1.5em;
    line-height: 1.1;
    padding-bottom: 0.5em;
  }
`
