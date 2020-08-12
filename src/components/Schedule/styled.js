import styled from "styled-components"
import { Link } from "gatsby"

export const ScheduleDay = styled.h2`
  background: #3e424d;
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  padding: 10px;
  text-align: "center";
  font-family: "Roboto";
`

export const TryButton = styled(Link)`
  background: #3e424d;
  color: #fff;
  padding: 5px 5px;
  font-size: 0.7rem;
  text-decoration: none;
  &:hover {
    background: ${props => (props.i % 2 === 0 ? "#FDF4FA" : "#EA3BA1")};
    color: ${props => (props.i % 2 === 0 ? "#EA3BA1" : "#FDF4FA")};
  }
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
  background: ${props => (props.i % 2 === 0 ? "#EA3BA1" : "#FDF4FA")};
  color: ${props => (props.i % 2 === 0 ? "#FFF" : "#EA3BA1")};
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
export const ScheduleTitle = styled.h2`
  font-size: 3.5rem;
  font-family: "Roboto";
  font-weight: 300;
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
