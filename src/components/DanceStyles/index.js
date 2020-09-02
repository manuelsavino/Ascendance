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
} from "./danceStylesstyled"

export default function DanceStyles() {
  // const ballet = useRef() as React.MutableRefObject<HTMLInputElement>;

  const styles = [
    {
      refv: "ballet",
      title: " Ages 3-4",
      description:
        "Our 3-4 ballet/tap classes offer the best of both worlds to even our smallest dancers. With mobility being a fairly new concept, exploration is key! Our classes encompass movement, the introduction of grace and technique, and also rhythm. Dancers use all their senses as they listen to upbeat and engaging music and are led by the highly trained dance instructors. ",
      icon: Ballet,
    },
    {
      refv: "tap",
      title: "Ages 5-6",
      description:
        "Whether your child has or has not ever taken a dance class, Ascendance Studio offers our 5-6 aged classes for all kinds of beginners! Explore ballet, tap, and/or flamenco in our fun, structured, and encouraging classes led by our creative and trained staff. Dancers dive into the world of movement and rhythm, listening closely to the music and living out their favorite princess dreams!",
      icon: Dancer,
    },
    {
      title: "Ages 7-9",
      description:
        "Does your child have all this energy and nowhere to put it? Primary to secondary-aged children usually do! It is this age group where most of our dancers really begin to get comfortable with exploring their creativity. Our classes are also designed to be able to really indulge in a variety of styles and begin to find that inner passion for dance, even at a young age! Maintain a strong mind and body as your dancer engages in jazz, hip-hop, tap, ballet, flamenco, or acro classes.",
      icon: Flamenco,
    },
    {
      title: "Ages 10-12",
      description:
        "Have a middle-schooler or an about-to-be-middle-schooler? Our 10-12 year old classes have been an awesome outlet for young children and pre-teens. With the increasing worry and rigor of school and growing up in general, our classes have been a creative and healthy experience for children within this age range. Styles varying between jazz, ballet, tap, hip-hop, lyrical, flamenco, and acro each offer something unique to your dancer, but all provide an introduction to a healthy lifestyle both physically and mentally. Your dancer will explore rhythm, movement, space, and technique, while feeling challenged and excited! Ascendance Studio classes for this age level have groomed long-lasting friendships and a lifelong passion in dance! ",
      icon: Jazz,
    },
    {
      title: "Teens",
      description:
        "Whether your teenager is at a beginner or intermediate dance level, our instructors have got you covered. Surrounded by dancers of similar ages, our teen classes provide a comfortable experience where energy and creativity meet in the middle. From jazz, tap, and hip-hop to lyrical, jazz funk, and ballet, teens love taking more than one Ascendance Studio dance class in conjunction. While the styles all complement each other, our teen dancers feel self-motivated and more prepared when they take two or more classes because the concepts and technique in one generally reinforce the concepts and technique in the other(s). Dancers learn responsibility with time management, as well as beneficial ways to exercise physical, mental, and emotional health. Focus on rigid technique and flow in ballet class, let out your inner groove in hip-hop class, or choose from our other amazing class offerings– the sky is the limit.",
      icon: Tech,
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
              {/* <DancerIcon src={style.icon} /> */}
            </OuterCard>
          )
        })}
      </CardContainer>
    </OuterContainer>
  )
}
