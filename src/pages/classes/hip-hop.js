import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Hero } from "../../components/Hero"
import hiphopHero from "../../images/hiphop.jpg"
import {
  Container,
  VideoContainer,
  SingleVideoCotnainer,
} from "../../components/common/layout"
import ScheduleViewer from "../../components/Schedule"
import FreeClass from "../../components/FreeClass"
import {
  Heading,
  SubHeading,
  Paragraph,
  ListItem,
  CopyLink,
  CopyLinkE,
} from "../../components/common/copy"

const classLabel = "Hip Hop"

const HipHop = () => {
  return (
    <Layout>
      <SEO title="Hip Hop Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>{classLabel} Classes</Heading>
        <Paragraph>
          Has your child ever tried to pop and lock? Have you noticed them
          curious about moving their bodies in rhythmic ways that groove and
          move across the floor? It may be time for them to try a hip-hop class!
          Help them embrace confidence in a new way via expression and movement
          on the dance floor!
        </Paragraph>
        <VideoContainer>
          <SingleVideoCotnainer>
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/A_rEyqWfohA"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </SingleVideoCotnainer>
        </VideoContainer>
        <SubHeading weight={600}>
          What do Hip-Hop classes look like at Ascendance?
        </SubHeading>
        <Paragraph>
          Picture this: a hype song is playing. There is a person on the dance
          floor owning every move they make with a stage presence so strong, it
          is hard to look away from them. This person has major training, you
          can just tell, and their confidence is contagious! Now imagine where
          this person’s training must have started and how dancing and training
          in hip-hop has helped them develop their personality. Hip-hop at
          <CopyLink to="/"> Ascendance Studio</CopyLink> really encourages the
          development of individuality. Our hip-hop professionals make it a
          point to teach every dancer not only how to follow a combination of
          steps, but to develop a style of their own. Isolations and sharp
          accents make for a strong foundation of hip-hop and every movement
          choreographed is meant to emphasize these elements so that dancers
          understand the music and movement promulgating each sound.
        </Paragraph>
        <Paragraph>
          From the very early age of five years old, our instructors teach
          students how to listen to the music and feel the beat. At Ascendance
          Studio, we teach hip-hop that is age-appropriate, straying away from
          risque movements. Our focus stems from the elements of the original
          dance form rather than conforming to the pressure of what is more
          common in society. In addition to providing training on musicality,
          hip-hop trains the body on how to incorporate isolations into
          movement. Each dancer is taught how to control different parts of
          their body to match the beat of the music. The result is so cool to
          watch! Let your child’s inner star shine through in the dance room!
          Sign them up for hip-hop today!
        </Paragraph>
        <FreeClass style={`${classLabel}`} />
        <ScheduleViewer style="HipHop" heading={`${classLabel} Schedule`} />
        <SubHeading weight={600}>Benefits of our Hip-Hop classes</SubHeading>
        <Paragraph>
          Hip-hop incorporates both anaerobic and aerobic elements, making it
          the perfect activity to enrich your child’s cardiovascular health! Not
          only does it fully immerse the mind, incorporating both mental and
          physical components, but it is a great stress-reliever. Focusing on an
          extracurricular activity like hip-hop is not only entertaining, but
          good for your child’s well-being in many ways. Learning in a classroom
          environment allows your child the opportunity to develop social skills
          and teaches the body control. Focusing on isolations and other
          stylistic components, hip-hop gives the dancer the opportunity to grow
          in a style that is completely different from the rest. Your child will
          become more well-rounded, indulge in fitness, and have fun all at the
          same time!
        </Paragraph>
        <FreeClass style={`${classLabel}`} />
        <SubHeading>Objectives of our Hip-Hop classes</SubHeading>
        <ListItem>To develop social skills </ListItem>
        <ListItem>To enhance cardiovascular activity </ListItem>
        <ListItem>To teach body control through body isolations </ListItem>
        <ListItem>To focus on musicality and individual beats </ListItem>
        <ListItem>To encourage individuality </ListItem>
        <ListItem>To promote fun times while still being active!</ListItem>
        <VideoContainer>
          <SingleVideoCotnainer>
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/A_rEyqWfohA"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </SingleVideoCotnainer>
        </VideoContainer>
        <FreeClass style={`${classLabel}`} />
        <SubHeading>
          What is hip-hop dance and where does it come from?
        </SubHeading>
        <Paragraph>
          Originating in the 1960’s,{" "}
          <CopyLinkE
            href="https://en.wikipedia.org/wiki/Hip_hop"
            target="_blank"
            rel="noopener"
          >
            hip-hop
          </CopyLinkE>{" "}
          was born on the streets from the east all the way to the west coast.
          Although the beginnings of hip-hop ranged in both style and execution,
          depending on which side you asked, they both had one thing in common
          for sure– their urban roots. Beginning in New York, uprock and
          breaking were two elements of funky dance created by African-Americans
          and Latino populations in the city. On the other side of the coin was
          the west coast, developing their style into what is commonly
          recognized as pop and lock and the “robot”. With exposure and
          popularity of both differing styles, came the undeniable evolution
          that morphed in what is today known and celebrated as hip-hop dance.
        </Paragraph>
        <Paragraph>
          Aside from the funky fundamental components, hip-hop dance was very
          much a social experience. With its roots on the streets, the style
          continues to flourish primarily in groups of people. Maybe you’ve done
          the funky chicken or dabbled in the running man– both popular hip-hop
          dances back in the day. Perhaps you’ve heard of the “Soulja Boy” or
          the{" "}
          <CopyLinkE
            href="https://www.youtube.com/watch?v=wZv62ShoStY"
            target="_blank"
            rel="noopener"
          >
            “Cha Cha Slide”
          </CopyLinkE>
          ? These are just a few examples of the diversity and evolution that
          hip-hop continues to offer. Other than the social aspect of hip-hop
          that you have perhaps observed at gatherings or parties, hip-hop is
          all around us. Popular on both television and movies, if you’ve ever
          seen any of the “
          <CopyLinkE
            href="https://www.imdb.com/title/tt0462590/"
            target="_blank"
            rel="noopener"
          >
            Step-Up
          </CopyLinkE>
          ” movies or any dance show such as{" "}
          <CopyLinkE
            href="https://www.fox.com/so-you-think-you-can-dance/"
            target="_blank"
            rel="noopener"
          >
            “So You Think You Can Dance”
          </CopyLinkE>
          or
          <CopyLinkE
            href="https://www.nbc.com/world-of-dance"
            target="_blank"
            rel="noopener"
          >
            “World of Dance”
          </CopyLinkE>
          , you’ve definitely seen hip-hop in action!
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default HipHop
