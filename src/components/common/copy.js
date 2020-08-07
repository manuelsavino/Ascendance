import styled from "styled-components"
const headingFontFam = '"Open Sans Condensed"'
const paragraphFontFam = "sans-serif"
export const SubHeading = styled.h4`
  font-size: 2rem;
  font-family: ${headingFontFam};
  font-weight: 300;
`
export const Heading = styled.h2`
  font-size: 3.5rem;
  font-family: ${headingFontFam};
  font-weight: 300;
`
export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: ${props => props.weight || 300};
  font-family: ${paragraphFontFam};
`

export const ListItem = styled.li`
  font-size: 1rem;
  font-family: ${paragraphFontFam};
  font-weight: ${props => props.weight || 300};
`
