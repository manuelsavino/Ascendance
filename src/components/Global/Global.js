import { createGlobalStyle } from "styled-components"
import colors from "../common/colors"

export default createGlobalStyle`
 *{margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
 }

 *::selection {
    background: ${colors.primary};
    color: #fff;
  }
`
