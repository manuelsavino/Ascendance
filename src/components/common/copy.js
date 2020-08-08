import styled from "styled-components"
const headingFontFam = '"Archivo Black", sans-serif'
const paragraphFontFam = '"Roboto",sans-serif'

export const SubHeading = styled.h4`
  font-size: 2rem;
  font-family: ${headingFontFam};
  font-weight: 300;
  margin-top: 20px;
  color: #393e46;
`
export const Heading = styled.h2`
  font-size: 3.5rem;
  font-family: ${headingFontFam};
  font-weight: 300;
  padding-top: 30px;
  color: #393e46;
`
export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: ${props => props.weight || 300};
  font-family: ${paragraphFontFam};
  line-height: 2;
  color: #393e46;
`

export const ListItem = styled.li`
  font-size: 1rem;
  font-family: ${paragraphFontFam};
  font-weight: ${props => props.weight || 300};
  color: #393e46;
  line-height: 2;
`
