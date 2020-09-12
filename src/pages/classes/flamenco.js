import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Hero } from "../../components/Hero"
import { Container } from "../../components/common/layout"
import ScheduleViewer from "../../components/Schedule"
import {
  Heading,
  SubHeading,
  Paragraph,
  ListItem,
} from "../../components/common/copy"
import FreeClass from "../../components/FreeClass"

const classLabel = "Flamenco"

const Flamenco = () => {
  return (
    <Layout>
      <SEO title="Flamenco Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>{classLabel} Classes</Heading>
        <Paragraph>
          If you are looking for your child to try a style that is completely
          unique and exotic, flamenco may be a great choice!
        </Paragraph>
        <Paragraph>
          With its origins in the southern region of Spain, flamenco has strong
          influences from the Andalusian gypsies and cultures of southern Asia.
          Further, flamenco is a style that incorporates intricate footwork with
          graceful hand motions. The different styles of music dictate the
          intensity of the foot movement and the feet, hands, body, and face all
          amplify each other in this cultural and intense style of dance. This
          genre of dance also incorporates other percussion instruments like
          castanets, bells, tambourines, etc to add rhythm to choreographic
          pieces.
        </Paragraph>
        <Paragraph>
          The emergence of flamenco as a famous, traditional dance came about in
          the 19th century with the opening of the first cafe where flamenco
          dancers performed, in Seville, Spain. This event transformed the
          typical family, home-oriented dance into a public performance enjoyed
          by spectators. Today, flamenco is widely popular in Spanish speaking
          countries, primarily those of the Latin American region.
        </Paragraph>
        <SubHeading weight={600}>
          How does Ascendance incorporate flamenco?
        </SubHeading>
        <Paragraph>
          Being in the heart of Miami, the home of a large Hispanic community,
          we are glad to have flamenco as a style represented at our studio. Our
          flamenco classes are categorized by age and open to all ages. For our
          younger dancers, the class is divided into 30 minutes of ballet and 30
          minutes of flamenco. This class teaches them the grace and technique
          of ballet, while educating them on the percussion and rhythmic aspect
          of flamenco.
        </Paragraph>
        <Paragraph>
          Our older students take a full hour of flamenco class and are taught
          traditional flamenco skills including: footwork, upper body movement,
          hand motions, and additional percussive touches that can be added to
          performances like: claps, snaps, and vocal accents. Each class
          contains a warm-up, across-the-floor, and center/choreography
          component to teach students everything from technique to facial
          expressions.{" "}
        </Paragraph>
        <FreeClass style={`${classLabel}`} />
        <SubHeading weight={600}>Benefits of Flamenco</SubHeading>
        <Paragraph>
          Similar to other dance styles, flamenco allows dancers to incorporate
          total body exercise that tones the arms and legs. Flamenco dancers are
          known to dance heavily with their upper bodies while performing quick
          footwork, giving them plenty of cardio-vascular exercise. Apart from
          this, flamenco teaches focus through the learning of complex rhythms,
          allowing the brain to isolate individual sounds when interpreting
          rhythms and patterns. The students also learn musicality and how to
          create various rhythms to one phrase of music. All in all, it is a
          great style to challenge oneself and exercise in a fun way!
        </Paragraph>
        <SubHeading weight={600}>Objectives of flamenco</SubHeading>
        <ul>
          <ListItem>To build a strong upper body</ListItem>
          <ListItem>To teach musicality and rhythm </ListItem>
          <ListItem>To provide a fun atmosphere and meet new friends </ListItem>
          <ListItem>
            To expose students to a cultural, traditional style of dance that
            differs from the rest
          </ListItem>
          <ListItem>
            Allows for cardiovascular and muscle building exercises to be
            performed in an entertaining way that your child will love
          </ListItem>
          <ListItem>To build and identify patterns with ease</ListItem>
          <ListItem>To adapt style and rhythm</ListItem>
        </ul>
        <ScheduleViewer
          danceStyle={classLabel}
          heading={`${classLabel} Schedule`}
        />
      </Container>
    </Layout>
  )
}

export default Flamenco
