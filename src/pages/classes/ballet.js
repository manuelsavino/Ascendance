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

const classLabel = "Ballet"

const Ballet = () => {
  return (
    <Layout>
      <Seo title="Ballet Classes - Dance Classes in Doral, FL" />
      <Container>
        <Heading>{classLabel} Classes</Heading>
        <Paragraph>
          Ascendance Studio offers ballet classes to various age levels starting
          at three years old through pre-school and on. In addition, there are
          also classes for teenagers, whether they have trained in ballet in the
          past or at a beginner level. At Ascendance, we recognize that ballet
          is the foundation of all dance language. Based on stylized music and a
          classic foundation, we strongly emphasize the importance of ballet
          technique in our classes. Usually performed to instrumental music,
          students are guided through the basics of ballet from positions, barre
          work, and exercises across the floor, to other floor work and
          combinations building strength and technique. Since ballet is at the
          core of all dance styles, it is integral in our curriculum. Ballet is
          precise, highly formalized, and disciplined. It will strengthen
          dancers beyond their own expectations and allow them to develop proper
          and fundamental dance technique. Dancers will become physically
          stronger, develop their core muscles, lengthen their muscles, and
          challenge their minds. They will improve their posture, balance,
          musicality, grace, and flexibility. At Ascendance Studio, it is highly
          recommended to take at least one ballet class, in addition to other
          styles.
        </Paragraph>
        <ScheduleViewer
          danceStyle={classLabel}
          heading={`${classLabel} Schedule`}
        />
        <SubHeading weight={600}>
          What do our Ballet Classes look like?
        </SubHeading>
        <Paragraph>
          At Ascendance Studio, above all, we ensure that your children get the
          best dance education possible. By utilizing various props and upbeat
          music we provide affordable ballet classes at the beginner,
          intermediate, and advanced levels to teach our students how to
          properly perform exercises at the barre, across-the-floor, and in the
          center of the classroom. Our ballet program goes beyond learning to be
          graceful and gentle. We emphasize a strict curriculum where proper
          technique is at the base.
        </Paragraph>
        <Paragraph>
          Similarly, all of our classes are 60 minutes long and provide a fun,
          educational atmosphere where students are encouraged to both challenge
          and express themselves using the skills and steps learned in class.
          Our goal is to inspire all of our students to not only be able to
          recognize and utilize proper technique and terminology, but to spark
          their own passion for dance. We divide our ballet classes by age
          groups in the following manner: ages 3 to 4, ages 5 to 6, 7 to 9, and
          10 to 12 years old, and teens. Our age groups are broken down this way
          so that each class is at a manageable size, where every child receives
          individualized attention from their instructor. It also helps students
          to build relationships with other students in their similar age group,
          which often times leads to friendships that last a lifetime. The
          established age divisions ensure that each dancer is learning the
          appropriate technique that corresponds to their dance level. Moreover,
          this system ensures that every class is taught in a way that is
          tailored for each age level.
        </Paragraph>
        <SubHeading weight={600}>
          Why should you take Ballet classes at Ascendance Studio?
        </SubHeading>
        <Paragraph>
          Not only is Ascendance Studio in a centralized location in the heart
          of Doral, but our instructors our well-versed in teaching ballet to
          all ages. At our studio, toddlers can take ballet classes starting at
          the age of 3! Apart from being conveniently located, our schedule is
          very versatile, giving parents many options for enrolling their
          children in dance. We offer a diverse selection of baby ballet classes
          almost every day of the week including Saturdays!
        </Paragraph>
        <Paragraph>
          Classes are instructed by highly trained dance professionals and keep
          your children (younger and older) engaged and entertained, utilizing
          their minds and bodies. Developing proper training in ballet is at the
          top of our priority list when it comes to dance technique, however,
          the drive and passion of our staff will inevitably instill a love for
          dance in your children too! Our ballet teachers have prestigious
          training, resulting in a strong foundation where your dancer can begin
          their dance training with confidence.
        </Paragraph>
        <FreeClass style={`${classLabel}`} />
        <SubHeading weight={600}>
          What are the Benefits of taking Ballet classes?
        </SubHeading>
        <Paragraph>
          As the core of all dance, ballet incorporates a wide variety of
          physical, social, and mental benefits that make it a valuable activity
          for the youth. Ballet engages the entire body from head to toe,
          requiring focus and discipline. It involves the mind which establishes
          control during exercises whether at the barre, across the floor, in
          the center, or during a choreographic routine. Ballet can benefit the
          stiffer dancer in that it promotes grace and fluid movement. On the
          other end of the spectrum, dancers with lack of body control would
          benefit from a ballet class so that they can translate their movement
          into purposeful and technical execution. Ballet also has the advantage
          of encouraging proper posture, can be low impact, and is a healthy
          activity that those who partake in can enjoy for the rest of their
          lives. This is true both inside and outside of the classroom.
          Moreover, it is an effective medium for your child to gain
          self-confidence, develop social skills, and explore a new activity! By
          taking a ballet class, rest assured that your child will develop
          skills in balance, flexibility, musicality, grace, and control. It is
          highly recommended that at least one ballet class is taken alongside
          other dance style to promote growth and dance progress..
        </Paragraph>
        <SubHeading>Objectives of our Ballet classes</SubHeading>
        <ul>
          <ListItem>To build a strong foundation in dance</ListItem>
          <ListItem>To gain muscular and mental strength</ListItem>
          <ListItem>To retain and apply ballet terminology </ListItem>
          <ListItem>To exercise the mind, body, and spirit </ListItem>
          <ListItem>
            To set and meet desired goals and build self-discipline
          </ListItem>
          <ListItem>
            To understand the key components of a healthy lifestyle
          </ListItem>
          <ListItem>
            To generate communication skills and increase self-confidence
          </ListItem>
          <ListItem>To develop grace and fluid movement</ListItem>
          <ListItem>
            To strengthen specific muscle groups to enable particular movements
            and technique
          </ListItem>
          <ListItem>
            To successfully execute barre and across-the-floor exercises
            properly
          </ListItem>
          <ListItem>To create long-lasting friendships and memories</ListItem>
          <ListItem>
            To facilitate a strong foundation to all dance styles{" "}
          </ListItem>
        </ul>
      </Container>
    </Layout>
  )
}

export default Ballet
