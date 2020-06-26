import React from "react"
import styled from "styled-components"
import Dancer from "../images/jump1.png"
import Ballet from "../images/ballet.png"
import HipHop from "../images/hiphop.png"
import Tech from "../images/tech.png"
import Jazz from "../images/jazz.png"
import JazzFunk from "../images/jazzfunk.png"
import Flamenco from "../images/flamenco.png"
import Belly from "../images/belly.png"

const OuterContainer = styled.div`
  width: 100%;
  background-color: #ebefef;
  padding: 30px 50px;
`
const StylesHeadline = styled.h2`
  font-family: "Poppins", sans-serif;
  color: #000;
  font-size: 4.5em;
  font-weight: 600;
`

const StylesSubHeadline = styled.p`
  font-family: "Poppins", sans-serif;
  color: #000;
  font-size: 23px;
  font-weight: 400;
`

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-content: flex-start;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  margin-top: 3em;
  align-content: flex-start;
`

const OuterCard = styled.div`
  width: 30%;
  margin: 0 1.5% 1.555em 1.555%;
  position: relative;
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`

const DancerIcon = styled.img`
  height: 200px;
  position: absolute;
  left: -10%;
  top: -10%;
  transition: all 0.5s ease;
  &:hover {
    transform: rotate(2deg);
  }
`

const Card = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #000;
  padding-left: 100px;
`

const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #000;
  font-size: 0.5em;
  padding-left: 100px;
`

export default function DanceStyles() {
  const styles = [
    {
      title: "BALLET",
      description:
        "Ballet is the foundation of all other dances and is based on stylized movement.This is a form of dance that is performed to instrumental music using precise and highly formalized steps.Ballet will help students with better posture, strength, balance, musicality, grace and flexibility. We highly recommend for all students to take at least one hour of ballet a week.",
      icon: Ballet,
    },
    {
      title: "TAP",
      description:
        "This style of dance is performed by using shoes with metal taps.Tap is characterized by using the sound of one's tap shoes hitting the floor as a percussive instrument.Tap is extremely good for the development of good coordination, musicality, rhythm, strength and endurance.",
      icon: Dancer,
    },
    {
      title: "FLAMENCO",
      description:
        "This style of dance is performed by using shoes with metal taps.Tap is characterized by using the sound of one's tap shoes hitting the floor as a percussive instrument.Tap is extremely good for the development of good coordination, musicality, rhythm, strength and endurance.",
      icon: Flamenco,
    },
    {
      title: "JAZZ",
      description:
        "Jazz showcases the dancer individual style and originality. Jazz dance was developed parallel to popular music, thus the movement continuously changes and evolves into different styles and ramifications.Lyrical and Contemporary styles are great examples of these ramifications. Jazz dance is extremely good for dancers to loosen up to music and at the same time learn technical skills.",
      icon: Jazz,
    },
    {
      title: "TECHNIQUE",
      description:
        "Technique classes are where we focus on developing technical skills and correcting bad habits that prevent dancers from advancing to the next level. Our technique classes are based on our unique curriculum which is geared toward strengthening the dancer’s flexibility, strength and becoming familiar with correct structural and muscular placement.",
      icon: Tech,
    },
    {
      title: "HIP HOP",
      description:
        "Hip-Hop is referred primarily to street dance styles. The movement in Hip Hop has lots of different dynamics; it's powerful, energetic, and stylish and allows for freedom of movement. While hip hop dance can be great for students aerobically, it can also help strengthen and tone muscles, and give joints more flexibility and elasticity.",
      icon: HipHop,
    },
    {
      title: "BELLY DANCE",
      description:
        "Belly dance has its roots in ancient cultures. This style focuses on isolating different parts of the body, footwork and musicality associated to Middle Eastern rhythms.",
      icon: Belly,
    },
    {
      title: "JAZZ FUNK",
      description:
        "Jazz funk is a combination of some foundational movements in Jazz and Hip Hop, all which turns into a funky style that is fun and expressive. Isolations and varying dynamics are characteristic of the style.",
      icon: JazzFunk,
    },
  ]

  return (
    <OuterContainer>
      <StylesHeadline>Master A Variety Of Styles</StylesHeadline>
      <StylesSubHeadline>
        Learn Moves, skills and full rouitines in a range of popular styles
      </StylesSubHeadline>
      <CardContainer>
        {styles.map(style => {
          return (
            <OuterCard>
              <Card>
                <Title>{style.title}</Title>
                <Description>{style.description}</Description>
              </Card>
              <DancerIcon src={style.icon} />
            </OuterCard>
          )
        })}
      </CardContainer>
    </OuterContainer>
  )
}
