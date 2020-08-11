import React, { useState, useEffect } from "react"
import {
  StyledFaqOuter,
  Question,
  QuestionAnswer,
  QuestionText,
} from "./faqStyled"
import Loading from "../../images/loading.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons"

export default function Faqs() {
  const fetchFaq = async () => {
    const res = await fetch("/.netlify/functions/getFaq")
    const { records } = await res.json()
    setQuetions(records)
    setLoading(false)
  }

  useEffect(() => {
    fetchFaq()
    // eslint-disable-line no-use-before-define
  }, [])
  const [faqExpand, setFaqExpand] = useState({})
  const [loading, setLoading] = useState(true)
  const [questions, setQuetions] = useState([])
  const handleClick = id => {
    setFaqExpand({ ...faqExpand, [id]: !faqExpand[id] })
  }
  if (loading) {
    return (
      <img
        style={{ display: "block", margin: "auto" }}
        alt="loading image animation"
        src={Loading}
      />
    )
  }

  return (
    <StyledFaqOuter>
      {questions.map(each => {
        const answer = { __html: each.fields.Answer }
        return (
          <Question key={each.id}>
            <QuestionText
              onClick={() => {
                handleClick(each.id)
              }}
            >
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
