import styled from "styled-components"
import colors from "../common/colors"

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
  align-content: flex-start;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  padding-top: 1em;
  align-content: flex-start;
  @media (max-width: 1150px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
    padding-top: 1em;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-top: 1em;
  }
`

export const PriceCard = styled.div`
  min-width: 300px;
  height: 160px;
  padding-bottom: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  position: relative;
  &::after {
  content: "${props => props.message}";
    position: absolute;
    font-size: 0.8rem;
    right: 0;
    bottom: 0;
    display: ${props => (props.message ? "block" : "none")};
    background: ${colors.secondary};
    color: #fff;
    padding: 3px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  }
  @media (max-width: 1400px) {
    min-width: 250px;
  }
`

export const OuterPricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`

export const PricingContainer = styled.div`
  display: flex;
`

export const PrivatePricing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  &:first-child {
    margin-right: 10px;
  }
  & > :first-child {
    font-size: 1rem;
  }
`

export const Strike = styled.p`
  position: relative;
  padding-right: 15px;
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  & > sup {
    font-size: 1rem;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 15px;
    transform: rotate(-15deg);
    left: 0;
    width: 2.1em;
    height: 5px;
    background: ${colors.primary};
    opacity: 0.8;
  }
`

export const Price = styled.p`
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  & > sup {
    font-size: 1rem;
  }
`

export const PerMonth = styled.p`
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
`

export const ClassesPerWeek = styled.h4`
  font-family: "Roboto", sans-serif;
  background: ${colors.primary};
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 5px 0;
`
