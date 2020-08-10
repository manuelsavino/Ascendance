import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import {
  StyledFaqOuter,
  Question,
  QuestionAnswer,
  QuestionText,
} from "./styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons"

const questionsArr = [
  {
    id: uuidv4(),
    question: "Why this and that 2?",
    answer: {
      __html:
        "<p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit. Quisque rhoncus quam venenatis orci lacinia, non posuere mauris tempor. Ut auctor leo non justo ornare mattis. Integer sit amet fringilla orci.</p>",
    },
  },
  {
    id: uuidv4(),
    question: "Why this and that 2?",
    answer: {
      __html:
        "<p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit. Quisque rhoncus quam venenatis orci lacinia, non posuere mauris tempor. Ut auctor leo non justo ornare mattis. Integer sit amet fringilla orci.</p>",
    },
  },
  {
    id: uuidv4(),
    question: "Why this and that 2?",
    answer: {
      __html:
        "<p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit. Quisque rhoncus quam venenatis orci lacinia, non posuere mauris tempor. Ut auctor leo non justo ornare mattis. Integer sit amet fringilla orci.</p>",
    },
  },
  {
    id: uuidv4(),
    question: "Why this and that 2?",
    answer: {
      __html:
        "<p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit. Quisque rhoncus quam venenatis orci lacinia, non posuere mauris tempor. Ut auctor leo non justo ornare mattis. Integer sit amet fringilla orci.</p>",
    },
  },
  {
    id: uuidv4(),
    question: "Why this and that 2?",
    answer: {
      __html:
        "<p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit. Quisque rhoncus quam venenatis orci lacinia, non posuere mauris tempor. Ut auctor leo non justo ornare mattis. Integer sit amet fringilla orci.</p>",
    },
  },
  {
    id: uuidv4(),
    question: "Why this and that 2?",
    answer: {
      __html:
        "<p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit. Quisque rhoncus quam venenatis orci lacinia, non posuere mauris tempor. Ut auctor leo non justo ornare mattis. Integer sit amet fringilla orci.</p>",
    },
  },
  {
    id: uuidv4(),
    question: "Why this and that 2?",
    answer: {
      __html:
        "<p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit. Quisque rhoncus quam venenatis orci lacinia, non posuere mauris tempor. Ut auctor leo non justo ornare mattis. Integer sit amet fringilla orci.</p>",
    },
  },
  {
    id: uuidv4(),
    question: "Why this and that 2?",
    answer: {
      __html:
        "<p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit. Quisque rhoncus quam venenatis orci lacinia, non posuere mauris tempor. Ut auctor leo non justo ornare mattis. Integer sit amet fringilla orci.</p>",
    },
  },
]
const ids = {}
questionsArr.map(each => {
  ids[each.id] = false
})

export default function Faqs() {
  const [faqExpand, setFaqExpand] = useState(ids)
  const handleClick = id => {
    setFaqExpand({ ...faqExpand, [id]: !faqExpand[id] })
  }

  return (
    <StyledFaqOuter>
      {questionsArr.map(each => {
        return (
          <Question
            onClick={() => {
              handleClick(each.id)
            }}
            key={each.id}
          >
            <QuestionText>
              <FontAwesomeIcon
                style={{ color: "#ea3ba1" }}
                icon={
                  faqExpand[each.id] === true ? faMinusSquare : faPlusSquare
                }
              />
              <span style={{ paddingLeft: "10px" }}>{each.question}</span>
            </QuestionText>
            <QuestionAnswer
              dangerouslySetInnerHTML={each.answer}
              opened={faqExpand[each.id]}
            />
          </Question>
        )
      })}
    </StyledFaqOuter>
  )
}
