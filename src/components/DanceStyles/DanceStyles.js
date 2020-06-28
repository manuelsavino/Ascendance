import React from "react"
import Dancer from "../../images/jump1.png"
import Ballet from "../../images/ballet.png"
import HipHop from "../../images/hiphop.png"
import Tech from "../../images/tech.png"
import Jazz from "../../images/jazz.png"
import JazzFunk from "../../images/jazzfunk.png"
import Flamenco from "../../images/flamenco.png"
import Belly from "../../images/belly.png"

import {
  OuterContainer,
  StylesHeadline,
  StylesSubHeadline,
  CardContainer,
  OuterCard,
  DancerIcon,
  Card,
  Title,
  Description,
} from "./styled"

export default function DanceStyles() {
  // const ballet = useRef() as React.MutableRefObject<HTMLInputElement>;

  const styles = [
    {
      refv: "ballet",
      title: "BALLET",
      description:
        "Ballet is the foundation of all other dances and is based on stylized movement.This is a form of dance that is performed to instrumental music using precise and highly formalized steps.Ballet will help students with better posture, strength, balance, musicality, grace and flexibility. We highly recommend for all students to take at least one hour of ballet a week.",
      icon: Ballet,
    },
    {
      refv: "tap",
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
