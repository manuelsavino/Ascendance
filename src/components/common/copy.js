import styled from "styled-components"
import { Link } from "gatsby"
const headingFontFam = '"Roboto",sans-serif'
const paragraphFontFam = '"Roboto",sans-serif'

export const SubHeading = styled.h2`
  font-size: 2rem;
  font-family: ${props =>
    props.secondary ? `${paragraphFontFam}` : `${headingFontFam}`};
  font-weight: 300;
  margin-top: 20px;
  color: #393e46;
`
export const Heading = styled.h1`
  font-size: ${props => props.size || "3.5rem"};
  font-family: ${headingFontFam};
  font-weight: 700;
  padding-top: 30px;
  color: #393e46;
  line-height: 1;
  text-align: center;
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 20px;
  }
`
export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: ${props => props.weight || 300};
  font-family: ${paragraphFontFam};
  line-height: 1.7;
  color: #393e46;
  padding: 10px 0;
`

export const ListItem = styled.li`
  font-size: 1rem;
  font-family: ${paragraphFontFam};
  font-weight: ${props => props.weight || 300};
  color: #393e46;
  line-height: 2;
  & ::selection {
    background: #ea3ba1;
    color: #fff;
  }
`

export const CopyLink = styled(Link)`
  color: #ea3ba1;
  text-decoration: none;
  font-weight: 500;
`

export const CopyLinkE = styled.a`
  color: #ea3ba1;
  text-decoration: none;
  font-weight: 500;
`
