import React from "react"
import styled from "styled-components"

const OuterContainer = styled.div`
  width: 100%;
  background-color: #ebefef;
  padding: 30px 50px;
`
const StylesHeadline = styled.h2`
  font-family: "Poppins", sans-serif;
  color: #000;
  font-size: 4.5em;
  font-weight: 600;
`

const StylesSubHeadline = styled.p`
  font-family: "Poppins", sans-serif;
  color: #000;
  font-size: 23px;
  font-weight: 400;
`

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-content: flex-start;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  margin-top: 3em;
`

const Card = styled.div`
  background: #fff;
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #000;
  width: 30%;
  margin: 0 1.5% 1.555em 1.555%;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function DanceStyles() {
  const styles = [
    "BALLET",
    "TAP",
    "FLAMENCO",
    "JAZZ",
    "TECHNIQUE",
    "HIP HOP",
    "BELLY DANCE",
    "JAZZ FUNK",
  ]

  return (
    <OuterContainer>
      <StylesHeadline>Master A Variety Of Styles</StylesHeadline>
      <StylesSubHeadline>
        Learn Moves, skills and full rouitines in a range of popular styles
      </StylesSubHeadline>
      <CardContainer>
        {styles.map(style => {
          return (
            <Card>
              <p>{style}</p>
            </Card>
          )
        })}
      </CardContainer>
    </OuterContainer>
  )
}
