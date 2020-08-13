import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  margin: 85px auto 0;
  padding-bottom: 80px;
  width: 90%;
`
export const Button = styled(Link)`
  background-color: #ea3ba1;
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
export const DualVideoContainer = styled.div`
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 40px 0 30px;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    & > iframe {
      margin-bottom: 10px;
      width: 95%;
    }
  }
`
