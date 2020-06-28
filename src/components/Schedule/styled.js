import styled from "styled-components"

export const ScheduleDay = styled.h2`
  background: #3e424d;
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  padding: 10px;
  text-align: "center";
  font-family: "Open Sans Condensed", sans-serif;
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
  font-family: "Open Sans Condensed";
  font-weight: 300;
`

export const DanceClassTime = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
`
