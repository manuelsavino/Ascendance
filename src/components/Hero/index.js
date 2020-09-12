import styled from "styled-components"
import HeroImg from "../../images/heroNewC.jpg"
export const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: ${props => props.height || "800px"};
  background: url(${props => props.img || HeroImg});
  background-attachment: ${props => (props.parallax ? "fixed" : "initial")};
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
    background: ${props =>
      props.gradient
        ? "radial-gradient(transparent, rgba(0, 0, 0, 0.95))"
        : "none"};
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    background-attachment: scroll;
  }
`
