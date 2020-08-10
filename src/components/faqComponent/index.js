import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import {
  StyledFaqOuter,
  Question,
  QuestionAnswer,
  QuestionText,
} from "./faqStyled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons"

export default function Faqs() {
  const fetchFaq = async () => {
    const res = await fetch("/.netlify/functions/getFaq")
    const { records } = await res.json()
    console.log(records)
    setQuetions(records)
  }

  useEffect(() => {
    fetchFaq()
    // eslint-disable-line no-use-before-define
  }, [])
  const [faqExpand, setFaqExpand] = useState({})
  const [questions, setQuetions] = useState([])
  const handleClick = id => {
    setFaqExpand({ ...faqExpand, [id]: !faqExpand[id] })
  }

  return (
    <StyledFaqOuter>
      {questions.map(each => {
        const answer = { __html: each.fields.Answer }
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
              <span style={{ paddingLeft: "10px" }}>
                {each.fields.Question}
              </span>
            </QuestionText>
            <QuestionAnswer
              dangerouslySetInnerHTML={answer}
              opened={faqExpand[each.id]}
            />
          </Question>
        )
      })}
    </StyledFaqOuter>
  )
}
