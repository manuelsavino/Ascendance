import React, { useState, useEffect, ReactHTMLElement } from "react"
import convert from "htmr"
import {
  StyledFaqOuter,
  Question,
  QuestionAnswer,
  QuestionText,
} from "./faqStyled"
import { CopyLink, CopyLinkE } from "../../components/common/copy"
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
        alt="loading animation"
        src={Loading}
      />
    )
  }

  const transform = {
    a: node => {
      if (node.to) return <CopyLink to={node.to}>{node.children}</CopyLink>
      else
        return (
          <CopyLinkE
            href={node.href}
            target={node.target}
            rel="noopener noreferrer"
          >
            {node.children}
          </CopyLinkE>
        )
    },
  }

  return (
    <StyledFaqOuter>
      {console.log(questions.filter(each => each.fields.Prod))}
      {questions
        .filter(each => each.fields.Prod)
        .map(each => {
          return (
            <Question key={each.id}>
              <QuestionText
                opened={faqExpand[each.id]}
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
                <span>{each.fields.Question}</span>
              </QuestionText>
              <QuestionAnswer opened={faqExpand[each.id]}>
                {convert(each.fields.Answer, { transform })}
              </QuestionAnswer>
            </Question>
          )
        })}
    </StyledFaqOuter>
  )
}
