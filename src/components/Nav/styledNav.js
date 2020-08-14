import styled from "styled-components"
import { Link } from "gatsby"
import colors from "../common/colors"

export const ContactBar = styled.div`
  background: ${colors.primary};
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    height: 29px;
  }
`
export const ContactBarInner = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`
export const PhoneNumber = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
`

export const SocialMediaIcons = styled.span`
  display: flex;
`

export const SocialMediaIcon = styled.a`
  padding: ${props =>
    props.icon === "instagram" ? "6px 12px 6px 12px" : "6px 11px"};
  z-index: 0;
  position: relative;
  color: white;
  &::before {
    content: "";
    width: 33px;
    height: 32px;
    position: absolute;
    z-index: -1;
    top: -113%;
    left: 3px;
    transition: all 0.2s ease;
    background: ${props => colors[props.icon]};
  }
  &:hover::before {
    top: -1px;
  }
  @media (max-width: 768px) {
    &::before {
      height: 30px;
    }
  }
`
