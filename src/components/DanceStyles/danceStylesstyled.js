import styled from "styled-components"

export const OuterContainer = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  background-image: radial-gradient(#0000000d 1px, #0000 0),
    radial-gradient(#0000000d 1px, #0000 0);
  background-size: 40px 40px, 40px 40px;
  background-position: 0 0, 20px 20px;
  padding: 30px 0;
  @media (max-width: 768px) {
    padding: 30px 20px;
    font-size: 0.5rem;
  }
`
export const StylesHeadline = styled.h2`
  color: #333;
  font-size: 3.5em;
  font-weight: 600;
  @media (max-width: 768px) {
    /* font-size: 2.5em; */
    line-height: 1.1;
    padding-bottom: 0.5em;
  }
`

export const StyleSubHeadline = styled.h4`
  color: #333;
  font-size: 0.8em;
  font-weight: 300;
`

export const StylesSubHeadline = styled.p`
  color: #333;
  font-size: 1.5em;
  font-weight: 400;
`

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  align-content: flex-start;
  font-size: 24px;
  margin-top: 1em;
  align-content: flex-start;
  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 1em;
  }
`

export const OuterCard = styled.div`
  /* min-width: 25%; */
  margin: 0 1.5% 0 1.555%;
  position: relative;
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
  display: flex;
  align-items: center;
  padding-left: 10px;
  @media screen and (max-width: 768px) {
    margin: 0 1.5% 0 1.55%;
    flex-direction: column;
  }
`

export const DancerIcon = styled.img`
  height: 110px;
  @media screen and (max-width: 768px) {
    padding-top: 10px;
  }
`

export const Card = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`

export const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #333;
  /* padding-left: 100px; */
`

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #333;
  font-size: 0.5em;
  /* padding-left: 100px; */
  padding-top: 5px;
`
