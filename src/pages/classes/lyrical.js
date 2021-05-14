import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import { Hero } from "../../components/Hero"
import { Container } from "../../components/common/layout"
import ScheduleViewer from "../../components/Schedule"
import {
  Heading,
  SubHeading,
  Paragraph,
  ListItem,
  CopyLink,
} from "../../components/common/copy"
import FreeClass from "../../components/FreeClass"

const classLabel = "Lyrical"

const Lyrical = () => {
  return (
    <Layout>
      <Seo title="Lyrical Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>{classLabel} Classes</Heading>
        <Paragraph>
          Does your child like to sing along and dance to music by artists like
          Celine Dion and Sam Smith? Have you noticed them moving to the music
          and using their bodies to feel the groove? Lyrical dance just may be
          the right fit for them. What is lyrical dance and how does it differ
          from other styles of dance?
        </Paragraph>
        <Paragraph>
          For starters, the history of lyrical is one that is not entirely
          clear, as it did not originate from just one person. There are three
          different choreographers that are known for being the innovators of
          lyrical dance: Jimmy Peters, Cheyla Clawson, and Phyllis
          Balanga-Demoret. Much like ballet, lyrical is a gentle style of dance
          that incorporates elements of grace and fluidity in movement and
          technique. Unlike ballet, lyrical is a style that was popular on
          competitive dance stages, making it attractive to many career-oriented
          dancers. Suzi Taylor, a Broadway choreographer, is commonly well known
          for being the mother of lyrical, utilizing movement through expression
          and musicality.
        </Paragraph>
        <Paragraph>
          In recent history, the style of lyrical has evolved very much. Lyrical
          used to incorporate an emphasis on emotion and lyrics, but now the
          emotional aspect of lyrical is performed in a more abstract manner. It
          has a more individualistic approach focused on the message rather than
          the movements. The choreography is viewed as a guide, rather than a
          set routine. Lyrical is a style of sentiment; there is a lot of room
          for improvisation and free movement. Give your child the opportunity
          to explore movement and grace in a new way at{" "}
          <CopyLink to="/"> Ascendance Studio</CopyLink>
        </Paragraph>
        <FreeClass style={`${classLabel}`} />
        <SubHeading weight={600}>
          How do we dance lyrical dance at Ascendance?
        </SubHeading>
        <Paragraph>
          At <CopyLink to="/"> Ascendance Studio</CopyLink>, we are highly
          proficient in the style of lyrical dance due to the expertise of our
          instructors and the grace/emotional application that our students
          display in class. Our lyrical classes are determined by age group and
          labeled “combo” classes because of the rotation of styles taught each
          week. These classes allow dancers to explore all types of movements
          within both lyrical and contemporary, making them more well-rounded
          performers. At Ascendance Studio, lyrical is taught to our older
          students, since understanding the emotional aspect of it does require
          a higher level of maturity.
        </Paragraph>
        <Paragraph>
          Lyrical students are encouraged to let loose, understand musical
          accents, and create free movement in accordance to their own unique
          interpretation of the song. In addition, dancers practice technical
          skills essential to both styles including: turns, jumps, and
          progressions across the floor and are taught dance combinations at the
          end of class to practice the art of performance. Our instructors also
          incorporate improvisation skills within their classes to help students
          learn how to experiment with movement, interpret music and transform
          emotion. Encourage your child to explore their creative movement at
          <CopyLink to="/"> Ascendance Studio</CopyLink>!
        </Paragraph>
        <ScheduleViewer
          danceStyle={classLabel}
          heading={`${classLabel} Schedule`}
        />
        <SubHeading weight={600}>Benefits of Lyrical</SubHeading>
        <Paragraph>
          Lyrical is a style of expression and therefore can be a very effective
          stress reliever. The music associated with this genre of dance tends
          to be softer and more soothing than the music for other styles of
          dance. Dancers aim to correlate their movements to the changing
          rhythms of the music by utilizing the control and technical skills
          that they have learned in class. Lyrical teaches patience and
          determination when aiming to master new skills, especially those that
          require multiple weeks or even months to perfect. Lyrical also
          provides a healthy source of exercises that allows your body to gain a
          total body workout while making your brain focus on the task at hand.
          Lyrical dance combines mind, body, and spirit in a creative way and
          overall, is a beautiful form of dance that provides an emotional and
          physical outlet to dancers across the industry.
        </Paragraph>
        <SubHeading weight={600}>Objectives of Lyrical</SubHeading>
        <ul>
          <ListItem>To teach self-expression and free movement</ListItem>
          <ListItem>
            To incorporate mind, body, and spirit via graceful movement
          </ListItem>
          <ListItem>
            To provide cardio-vascular exercise to maintain a healthy lifestyle{" "}
          </ListItem>
          <ListItem>
            To gain body self-control and become motivated to learn more
            technical skills{" "}
          </ListItem>
          <ListItem>
            To enhance social interaction that can lead to long-lasting
            friendships
          </ListItem>
          <ListItem>
            To introduce a completely new style students have never experienced
            before
          </ListItem>
        </ul>
      </Container>
    </Layout>
  )
}

export default Lyrical
