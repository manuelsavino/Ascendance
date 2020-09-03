import styled from "styled-components"
import colors from "../common/colors"

export const NextSteps = styled.div`
  width: 90%;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  & > h2 {
    font-size: 2.5rem;
    font-family: "Roboto", sans-serif;
    margin-top: 20px;
    text-align: left;
    color: #ea3ba1;
    margin-bottom: 20px;
  }
`

export const Step = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`

export const StepTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${colors.secondary};
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 5px;
  }
`
export const StepDetails = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${colors.secondary};
  & > a {
    color: ${colors.primary};
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`
export const StepImage = styled.div`
  border: solid 5px ${colors.primary};
  min-width: 100px;
  min-height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background: #fafafa;
  & > svg {
    color: ${colors.primary};
    min-height: 50px;
  }
  @media screen and (max-width: 768px) {
    min-width: 60px;
    min-height: 50px;
    margin-right: 5px;
    & > svg {
      font-size: 1em;
    }
  }
`

export const FollowUs = styled.a`
  color: ${colors.primary};
  text-decoration: none;
  & > svg {
    color: ${colors.secondary};
  }
`
