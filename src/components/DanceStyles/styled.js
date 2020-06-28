import styled from "styled-components"

export const OuterContainer = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  background-image: radial-gradient(#0000000d 1px, #0000 0),
    radial-gradient(#0000000d 1px, #0000 0);
  background-size: 40px 40px, 40px 40px;
  background-position: 0 0, 20px 20px;
  padding: 30px 50px;
  @media (max-width: 768px) {
    padding: 30px 20px;
    font-size: 0.5rem;
  }
`
export const StylesHeadline = styled.h2`
  font-family: "Poppins", sans-serif;
  color: #000;
  font-size: 4.5em;
  font-weight: 600;
  @media (max-width: 768px) {
    /* font-size: 2.5em; */
    line-height: 1.1;
    padding-bottom: 0.5em;
  }
`

export const StylesSubHeadline = styled.p`
  font-family: "Poppins", sans-serif;
  color: #000;
  font-size: 1.5em;
  font-weight: 400;
  @media (max-width: 768px) {
    /* font-size: 2.5em; */
    /* line-height: 1; */
  }
`

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  align-content: flex-start;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  margin-top: 3em;
  align-content: flex-start;
  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const OuterCard = styled.div`
  /* min-width: 25%; */
  margin: 0 1.5% 1.555em 1.555%;
  position: relative;
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.03);
    transform: rotate(1deg);
  }
`

export const DancerIcon = styled.img`
  height: 200px;
  position: absolute;
  left: -10%;
  top: -10%;
  transition: all 0.5s ease;
  &:hover {
    transform: rotate(2deg);
  }
  @media (max-width: 1400px) {
    height: 175px;
  }
`

export const Card = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #000;
  padding-left: 100px;
`

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #000;
  font-size: 0.5em;
  padding-left: 100px;
`
