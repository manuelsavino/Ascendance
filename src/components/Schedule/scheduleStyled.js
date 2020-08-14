import styled from "styled-components"
import { Link } from "gatsby"
import colors from "../common/colors"

export const ScheduleDay = styled.h2`
  background: ${colors.secondary};
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  padding: 10px;
  text-align: "center";
  font-family: "Roboto";
`

export const DayContainer = styled.div`
  display: flex;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const DanceClassBlock = styled.div`
  padding: 10px;
  margin: 5px 0;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props =>
    props.i % 2 === 0 ? colors.primary : colors.lightPink};
  color: ${props => (props.i % 2 === 0 ? "#FFF" : colors.primary)};
`

export const DanceClassDetail = styled.p`
  font-size: 0.8rem;
  font-family: "Roboto";
  font-weight: 300;
`

export const DanceClassTime = styled(DanceClassDetail)`
  font-family: "Roboto";
  font-weight: 400;
  margin-bottom: 5px;
`
export const ScheduleFilterTitle = styled.h3`
  font-size: 1.5rem;
  font-family: "Roboto";
  font-weight: 300;
  color: #393e46;
  margin-top: 15px;
`

export const FilterCat = styled.h4`
  font-size: 2rem;
  font-family: "Roboto";
  font-weight: 300;
`

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: auto;
  background: #fff;
  border-radius: 20px;
  padding: 15px 0;
`

export const NoResultsImage = styled.img`
  width: 50%;
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 90%;
  }
`
