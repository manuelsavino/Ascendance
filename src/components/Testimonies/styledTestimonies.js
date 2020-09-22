import styled from "styled-components"
import colors from "../common/colors"

export const Testimonial = styled.div`
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 45%;
  width: 45%;
  flex-wrap: wrap;
  min-height: 150px;
  background: #fff;
  padding: 20px;
  margin-bottom: 10px;

  & > p {
    margin-top: 10px;
    color: ${colors.secondary};
    font-size: 0.9rem;
    text-indent: 25px;
  }
  & > svg {
    color: ${colors.primary};
    min-height: 40px;
    min-width: 40px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  & > ${Testimonial}:nth-of-type(odd) {
    margin-right: 30px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const TestimonialName = styled.div`
  font-size: 0.9rem;
  margin-top: 10px;
  width: max-content;
  margin-left: auto;
  color: ${colors.secondary};
  & > :nth-child(1) {
    font-weight: 600;
  }
  & > :nth-child(2) {
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }
`
