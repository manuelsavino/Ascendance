import React from "react"
import ages3 from "../../images/ages-3-4.png"
import ages5 from "../../images/ages-5-6.png"
import ages7 from "../../images/ages-7-9.png"
import ages10 from "../../images/ages-10-12.png"
import agesteens from "../../images/ages-teens.png"

import {
  OuterContainer,
  StylesHeadline,
  CardContainer,
  OuterCard,
  DancerIcon,
  Card,
  Title,
  Description,
  StyleSubHeadline,
} from "./danceStylesstyled"

import { Button } from "../common/layout"

export default function DanceStyles({ type, headline }) {
  // const ballet = useRef() as React.MutableRefObject<HTMLInputElement>;

  const types = {
    ages: [
      {
        title: " Ages 3-4",
        subTitle: "Preschool",
        description:
          "Our 3-4 ballet/tap classes offer the best of both worlds to even our smallest dancers. With mobility being a fairly new concept, exploration is key! Our classes encompass movement, the introduction of grace and technique, and also rhythm. Dancers use all their senses as they listen to upbeat and engaging music and are led by the highly trained dance instructors. ",
        icon: ages3,
      },
      {
        title: "Ages 5-6",
        subTitle: "Kindergarten",
        description:
          "Whether your child has or has not ever taken a dance class, Ascendance Studio offers our 5-6 aged classes for all kinds of beginners! Explore ballet, tap, and/or flamenco in our fun, structured, and encouraging classes led by our creative and trained staff. Dancers dive into the world of movement and rhythm, listening closely to the music and living out their favorite princess dreams!",
        icon: ages5,
      },
      {
        title: "Ages 7-9",
        description:
          "Does your child have all this energy and nowhere to put it? Primary to secondary-aged children usually do! It is this age group where most of our dancers really begin to get comfortable with exploring their creativity. Our classes are also designed to be able to really indulge in a variety of styles and begin to find that inner passion for dance, even at a young age! Maintain a strong mind and body as your dancer engages in jazz, hip-hop, tap, ballet, flamenco, or acro classes.",
        subTitle: "1st, 2nd and 3rd Grade",
        icon: ages7,
      },
      {
        title: "Ages 10-12",
        description:
          "Have a middle-schooler or an about-to-be-middle-schooler? Our 10-12 year old classes have been an awesome outlet for young children and pre-teens. With the increasing worry and rigor of school and growing up in general, our classes have been a creative and healthy experience for children within this age range. Styles varying between jazz, ballet, tap, hip-hop, lyrical, flamenco, and acro each offer something unique to your dancer, but all provide an introduction to a healthy lifestyle both physically and mentally. Your dancer will explore rhythm, movement, space, and technique, while feeling challenged and excited! Ascendance Studio classes for this age level have groomed long-lasting friendships and a lifelong passion in dance! ",
        subTitle: "4th, 5th and 6th Grade",
        icon: ages10,
      },
      {
        title: "Teens",
        description:
          "Whether your teenager is at a beginner or intermediate dance level, our instructors have got you covered. Surrounded by dancers of similar ages, our teen classes provide a comfortable experience where energy and creativity meet in the middle. From jazz, tap, and hip-hop to lyrical, jazz funk, and ballet, teens love taking more than one Ascendance Studio dance class in conjunction. While the styles all complement each other, our teen dancers feel self-motivated and more prepared when they take two or more classes because the concepts and technique in one generally reinforce the concepts and technique in the other(s). Dancers learn responsibility with time management, as well as beneficial ways to exercise physical, mental, and emotional health. Focus on rigid technique and flow in ballet class, let out your inner groove in hip-hop class, or choose from our other amazing class offerings– the sky is the limit.",
        subTitle: "7th, 8th and High School",
        icon: agesteens,
      },
    ],
    styles: [
      {
        title: "Ballet",
        description:
          "Ballet is the foundation of all other dances and is based on stylized movement.This is a form of dance that is performed to instrumental music using precise and highly formalized steps.Ballet will help students with better posture, strength, balance, musicality, grace and flexibility. We highly recommend for all students to take at least one hour of ballet a week.",
        icon: ages3,
      },
      {
        title: "Hip Hop",
        description:
          "Hip-Hop is referred primarily to street dance styles. The movement in Hip Hop has lots of different dynamics; it's powerful, energetic, and stylish and allows for freedom of movement. While hip hop dance can be great for students aerobically, it can also help strengthen and tone muscles, and give joints more flexibility and elasticity.",
        icon: ages5,
      },
      {
        title: "Jazz",
        description:
          "Jazz showcases the dancer individual style and originality. Jazz dance was developed parallel to popular music, thus the movement continuously changes and evolves into different styles and ramifications.Lyrical and Contemporary styles are great examples of these ramifications. Jazz dance is extremely good for dancers to loosen up to music and at the same time learn technical skills.",
        icon: ages7,
      },
      {
        title: "Lyrical",
        description:
          "Lyrical is a style of expression and therefore can be a very effective stress reliever. The music associated with this genre of dance tends to be softer and more soothing than the music for other styles of dance. Dancers aim to correlate their movements to the changing rhythms of the music by utilizing the control and technical skills that they have learned in class. Lyrical teaches patience and determination when aiming to master new skills, especially those that require multiple weeks or even months to perfect.  ",
        icon: ages10,
      },
      {
        title: "Flamenco",
        description:
          "Flamenco is known by the grace movement of the hands as well as the controlled rhythmical movements of the feet. The dancers try to express their deepest emotions by using body movements and facial expressions. Today, flamenco dance is becoming more popular worldwide, not only because of its beauty, but because this form of dance teaches how to isolate movement and strengthen the muscles. It allows for an inner sense of the body that informs, where, and what each part of the body is doing at all times.",
        icon: agesteens,
      },
      {
        title: "Tap",
        description:
          "This style of dance is performed by using shoes with metal taps. Tap is characterized by using the sound of one's tap shoes hitting the floor as a percussive instrument.Tap is extremely good for the development of good coordination, musicality, rhythm, strength and endurance.",
        icon: ages3,
      },
    ],
  }

  return (
    <OuterContainer>
      <StylesHeadline>{headline}</StylesHeadline>
      <CardContainer>
        {console.log(types[type])}
        {types[type].map(style => {
          return (
            <OuterCard>
              <DancerIcon src={style.icon} />
              <Card>
                <Title>{style.title}</Title>
                <StyleSubHeadline>{style.subTitle}</StyleSubHeadline>
                <Description>{style.description}</Description>
                {type === "ages" ? (
                  <Button to="/schedule">
                    See our Schedule for {style.title}
                  </Button>
                ) : (
                  <div style={{ display: "flex" }}>
                    <Button to="/schedule">
                      See our {style.title} Schedule
                    </Button>
                    <Button
                      style={{ marginLeft: "5px" }}
                      to={`/classes/${style.title
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      Learn More
                    </Button>
                  </div>
                )}
              </Card>
            </OuterCard>
          )
        })}
      </CardContainer>
    </OuterContainer>
  )
}

DanceStyles.defaultProps = {
  type: "ages",
}
