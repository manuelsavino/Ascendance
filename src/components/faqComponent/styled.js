import styled from "styled-components"

export const StyledFaqOuter = styled.div`
  width: 60%;
  margin: auto;
  height: 400px;
  margin-top: 20px;
  border: solid 1px black;
  background: white;
`

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px rgba(0, 0, 0, 0.5);
`

export const QuestionText = styled.div`
  font-size: 1.1rem;
  padding: 10px;
`

export const QuestionAnswer = styled.div`
  display: ${props => (props.opened ? "block" : "none")};
  padding: 5px 10px;
`
export const ExpandIcon = styled.span`
  min-width: 50px;
  min-height: 50px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADJ0lEQVRoge2Zv08UQRTHP+CJ4c6oiGfiYWVDIzaA2Ir/gSHSQkLUktCqnUrrD9R/QBPt/BVLYi+QWIFYXbhDDTEBJAc2YvEWcvd29tjZmVsw3jeZYo6Z7/u+YffNe2+hiSb+b7R44mkFLgKDQC/QDRSAo8HfN4BlYAGYBaaBT8AfT/YT4ywwCSwB25ZjCbgPdKWuGugEngK/Y4qtN7aAJ8DJtMQPAysehOuxAlxrpPAMcupRAlaB58AY0A/kgcPByAe/jQEvgLU6PFOBLa9oB95FGJwHRoI1NnyjyEtt4nxryVcXGcziK8A4bqeVASYCLs3/xpF7F88M5CWgzwd5gH6gbLDz2JV42EA6h8R43ygE3NreUFLCTsLRpkRjxO8gDywqmz+AjiRkOuJUsHts9EnGxXnC78Qji/2A3LBbimTckiOpAwC31N5NLP/zk4pgHvuI4OJAjvBLfS/u5lbCuc2IpQBwcwDghtpfDLTtiUtq4yrJLhVXB7LAuuLo14tMHl1W8/fIM5g2KsAH9dugXmRyQEeaj54EJcG0moeioMmBbjX/7E2OPbRtrc2In9Q+d6ci1vlOp004rdasxHFAFylt++jAEbVmSy+IFZYOMkwObKj5sTSEROC4mv/SC0wOfFPzcxHkLXsM1/Um21qb0YEvan4hgjwNaNtam9GBGTXXF1uauKLmWpsRA9S++WvsTyqRQ575ao5Y6bwpmRtNIMDVgZtqf+xkDqRjVr15gfTT6WW1/64NQRfhgmbCUoSLA3fUXuuCBqTdV01SwZDO1kFSB3oIl5QPLfbvwlTUl2l8Uf9V2Uxc1IP0KvVJzgWGfCOPtN61vauuxFMG0kWke+ALPYRPfht44IM8g/QqNXkF6R7kHLhzwG3MrcXXwCEH7hq0I71KUxpcRgrwrAVfFonzOlRWi/fW3N1BBulVRuXz68BL4Dpym+eRWqINKUwGEEdfEb5hdcTxdvImDCGRwXdB8x0PL2xcdCDtPn3ZJRmbyKmfSEt8NQpIx6wYU2z1KCLpwRkXAT4/s/YifZs+pHvQRe1n1hISfmeQdsksB+AzaxNN/Ov4C9Zw3mt9xtIyAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
`
