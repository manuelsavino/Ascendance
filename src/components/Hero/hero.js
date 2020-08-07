import styled from "styled-components"
import HeroImg from "../../images/hero.jpg"

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 800px;
  background: url(${HeroImg});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  padding-top: 200px;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      rgba(204, 43, 94, 0.5) 0%,
      rgba(117, 58, 136, 0.5) 100%
    );
    background: radial-gradient(transparent, rgba(0, 0, 0, 0.95));
    width: 100%;
    height: 100%;
  }
`
