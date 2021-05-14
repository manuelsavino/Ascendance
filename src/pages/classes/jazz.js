import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
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

const classLabel = "Jazz"

const Jazz = () => {
  return (
    <Layout>
      <Seo title="Jazz Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>{classLabel} Classes</Heading>
        <Paragraph>
          Jazz is one of the most historic forms of dance, and at Ascendance our
          Jazz classes stay true to history. Jazz has evolved as a free-form
          style that develops as the music increases and decreases in pace. With
          a strong focus on technique, jazz encompasses style and strength. In
          addition, students will learn a variety of movements to enhance their
          technical dance foundation, as well as develop their individual style.
        </Paragraph>
        <Paragraph>
          At Ascendance Studio, we expose all our dancers to as many styles as
          possible while still promoting fun and well-being. We offer a various
          selection of jazz classes for all our beginner, intermediate, and
          advanced students. Each of our jazz classes incorporates a stretching
          component that focuses on developing the dancer’s flexibility, an
          across-the-floor portion that teaches them musicality and technique,
          and a choreography portion where students incorporate all the elements
          learned in class to a song.
        </Paragraph>
        <Paragraph>
          To make each class even more exciting, our dance teachers utilize
          various props to help our dancers envision themselves on the big
          stage, prepped and ready to perform! Apart from jazz classes,
          Ascendance teaches classes in contemporary and lyrical for those older
          dancers who wish to experiment with movement and different styles.
          These combination classes aim to teach how to integrate emotion with
          technique on the dance floor. Our dancers dance to various rhythms,
          learn how to improvise, and become comfortable with to truly feeling
          the music so they are able to connect to it and express themselves
          through movement.
        </Paragraph>
        <SubHeading weight={600}>What is Jazz Dance?</SubHeading>
        <Paragraph>
          To begin with, jazz dance encompasses all the technical elements of
          ballet, but incorporates more isolations, syncopation, ground work,
          and contractions than the ballet style. But, what exactly is jazz
          dance and where does it come from?
        </Paragraph>
        <Paragraph>
          For starters, jazz dance is an American creation, taking its origin in
          New Orleans from both European and African roots. It became immensely
          popular after the beginning of the 20th century, especially in the
          African American population that dispersed the dance style to the
          north of the country. As time went on, dancers that were training in
          ballet and modern dance became interested in the dance style and
          brought it to the stage in various forms. Have you ever heard of
          Broadway jazz? This style is rooted from this movement! Two icons in
          the jazz world include Katherine Dunham who emphasized the African
          roots within the style and Bob Fosse, known for his artistry in
          bringing jazz dazz to the big screen. Their influence, along with the
          influence of many famous jazz icons is still observed in jazz dance
          across the world today
        </Paragraph>
        <FreeClass style={`${classLabel}`} />
        <SubHeading weight={600}>
          Why you should take jazz classes at Ascendance?
        </SubHeading>
        <Paragraph>
          Jazz is a popular dance style among our students and we we are
          whole-heartedly confident that your child will fall in love with this
          style. The variety of music that our jazz classes utilize makes being
          in class fun and a different experience every single time students are
          in class! Our dance teachers love to mix genres of music from several
          eras to both educate and vary their classes. From Whitney Houston to
          Bruno Mars, we’ve got you covered! In addition to awesome tunes, our
          instructors work hard to break down jazz technique into the bare bones
          of the movements and steps so that your child is more likely to
          understand and in turn, able to execute the steps correctly. At
          Ascendance Studio, we emphasize technique at the core of our classes,
          as our goal is to train well-rounded and fundamentally strong dancers.
        </Paragraph>
        <Paragraph>
          What else makes our classes unique? Apart from technique and stylistic
          components, our classes sometimes incorporate a wide selection of
          props that will aid in helping your child absorb what they learned in
          creative and entertaining ways. Come try a jazz dance at Ascendance
          Studio, where improvisation and individuality are both highly
          emphasized in our curriculum.
        </Paragraph>
        <SubHeading weight={600}>
          Benefits of Jazz/Contemporary/Lyrical
        </SubHeading>
        <Paragraph>
          Learning how to dance is an achievement in and of itself, but being a
          diverse dancer is a gift that not many have the opportunity to have.
          The beauty behind jazz, lyrical, and contemporary is that it teaches
          you how to move to several types of music and use different rhythms,
          movement, and technique every time. These styles expose your child to
          something new, allowing them to build confidence in a completely
          different style. It teaches them the disciple, builds control, and
          enhances endurance. Jazz technique at Ascendance Studio will encourage
          dancers to become more aware of how their body works and make them
          more coordinated, strong, and well-rounded. Your child will gain the
          skills and confidence to express themselves through dance using proper
          technique and developing their own style, simultaneously! Ascendance
          Studio encourages you to step up to the challenge. Try our free jazz
          dance trial today!
        </Paragraph>
        <SubHeading weight={600}>
          What other styles come from ballet, besides jazz?
        </SubHeading>
        <Paragraph>
          Equally important to jazz and also offered by Ascendance Studio, are
          other styles that stem from ballet, such as contemporary and modern
          dance. Contemporary dance originated in the 1950’s and is a fusion of
          ballet, modern, and jazz dance. The style focuses on non-standard
          movements to express sentiment. Furthermore, common elements
          emphasized in contemporary dance include floor work, and focus on the
          importance of using the breath when dancing.
        </Paragraph>
        <Paragraph>
          When dancing contemporary, music is optional. The way that dancers use
          their bodies and accent their movements, tells a story and creates a
          visual rhythm all on its own. Contemporary dancers gain versatility in
          their ability to dance with or without music. Jazz, on the other hand,
          is more dependent on the music, utilizing the lyrics more and working
          alongside the music. Contemporary dance is a more experimental style
          and allows for more flow within the movement. Jazz, in contrast, is
          more structured and sharp. Leading masters of the contemporary
          industry today include Martha Graham, Mia Michaels, and Travis Wall.
        </Paragraph>
        <Paragraph>
          Apart from contemporary and jazz dance, modern dance was popularized
          in the early 20th century. Modern dance offered something contrary to
          the stiffness and restraint that the ballet style offered. Through the
          years, the style became diversified as several cultures around the
          world contributed a piece of their heritage. Like lyrical, modern is
          heavily dependent on emotion and many times expresses the social and
          political climates of the time. The emphasis on sentiment is stronger
          in modern than in contemporary. Movement in contemporary dance is
          fluid and allows for more experimentation with technique. Masters
          Martha Graham and Lester Horton’s techniques greatly revolutionized
          the dance world to form modern dance.
        </Paragraph>
        <SubHeading weight={600}>
          Objectives of Jazz/Contemporary/Lyrical
        </SubHeading>
        <ul>
          <ListItem>
            To increase flexibility, coordination, and endurance
          </ListItem>
          <ListItem>To learn proper technique and how to utilize it</ListItem>
          <ListItem>
            To teach musicality and dynamics of a new style of music{" "}
          </ListItem>
          <ListItem>To promote well-being and strength</ListItem>
          <ListItem>
            To foster long-lasting relationships in and outside of the classroom
          </ListItem>

          <ListItem>
            To educate students on the human anatomy and how to exercise control{" "}
          </ListItem>
          <ListItem>To allow for freedom of bodily expression</ListItem>
          <ListItem>
            To express and release energy in a healthy and fun way
          </ListItem>
        </ul>
        <ScheduleViewer danceStyle="Jazz" heading="Jazz Schedule" />
      </Container>
    </Layout>
  )
}

export default Jazz
