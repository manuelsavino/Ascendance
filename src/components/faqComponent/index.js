import React from "react"
import {
  StyledFaqOuter,
  Question,
  QuestionAnswer,
  QuestionText,
  ExpandIcon,
} from "./styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons"

export default function Faqs() {
  const handleClick = () => {}
  return (
    <StyledFaqOuter>
      <Question>
        <QuestionText>
          <FontAwesomeIcon icon={faPlusSquare} />
          This is my quetion?
        </QuestionText>
        <QuestionAnswer opened={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          rhoncus quam venenatis orci lacinia, non posuere mauris tempor. Ut
          auctor leo non justo ornare mattis. Integer sit amet fringilla orci.
        </QuestionAnswer>
      </Question>
    </StyledFaqOuter>
  )
}
