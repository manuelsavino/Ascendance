import styled from "styled-components"
import colors from "../common/colors"

export const OuterSocial = styled.div`
  width: max-content;
  margin: auto;
  padding-bottom: 50px;
`
export const FollowUs = styled.a`
  color: #1e1e1e;
  text-decoration: none;
  & > span {
    color: ${colors.primary};
  }
`

export const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /* grid-gap: 3em; */
  padding-bottom: 10px;
  width: max-content;
  margin: auto;
  @media screen and (max-width: 768px) {
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
    width: 200px;
    height: 200px;
  }
`
export const SocialHeadline = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #1e1e1e;
  font-size: 3.5em;
  padding-bottom: 20px;
  text-align: center;
  & > svg {
    margin-right: 10px;
    color: ${colors.primary};
  }
  @media (max-width: 768px) {
    font-size: 2em;
    line-height: 1.1;
    padding-bottom: 0.5em;
  }
`
