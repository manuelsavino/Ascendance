import styled from "styled-components"

export const StyledFaqOuter = styled.div`
  width: 80%;
  margin: auto;
  height: max-content;
  margin-top: 20px;
  background: white;
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  color: #393e45;
`

export const QuestionText = styled.div`
  font-size: 1.1rem;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`

export const QuestionAnswer = styled.div`
  transform: ${props => (props.opened ? "scale(1)" : "scaleY(0)")};
  max-height: ${props => (props.opened ? "auto" : "0")};
  transition: transform 0.1s ease;
  transform-origin: top center;
  overflow: hidden;
  padding: ${props => (props.opened ? "5px 10px 10px 10px" : "0")};
  color: #393e45;
  & > p {
    line-height: 1.2;
    padding: 0 10px;
  }
`
