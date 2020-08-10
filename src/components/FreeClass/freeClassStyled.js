import styled from "styled-components"
import { Link } from "gatsby"

export const FreeClassContainer = styled.div`
  padding: 20px 0;
  & > * > a {
    text-decoration: none;
    font-weight: inherit;
    font-family: inherit;
  }
  & > p {
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    margin-top: 20px;
    color: #393e46;
  }
`

export const TryButton = styled(Link)`
  background-color: --color-primary;
  background-image: linear-gradient(150deg, #3e424d 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  transition: background 500ms ease-in-out;
  position: relative;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    background-position: 0;
    cursor: pointer;
  }
`