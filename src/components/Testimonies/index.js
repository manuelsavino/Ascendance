import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { Testimonial, TestimonialName, Grid } from "./styledTestimonies"

export default function Testimonies() {
  const testimonials = [
    {
      copy:
        "I like Ascendance because it is family oriented and professional. My daughter likes it because it’s fun. She can’t wait for dance class. And you should see the performance! Broadway style!",
      name: "Maria",
      parent: "Mom",
    },
    {
      copy:
        "Awesome place, where kids learn how to dance, have a healthy lifestyle, improve their discipline and teamwork skills and have lots of fun!",
      name: "Mauricio",
      parent: "Dad",
    },
    {
      copy:
        "My girls love the studio. The teachers are very patient with them and I can see their self confidence improving as they dance.",
      name: "Erin",
      parent: "Mom",
    },
    {
      copy:
        "The teachers are great. They are knowledgeable and they are very patient with the kids. The staff is amazing. Always willing to help and answer questions.",
      name: "Judith",
      parent: "Mom",
    },
  ]

  return (
    <Grid>
      {testimonials.map(testimonial => (
        <Testimonial>
          <FontAwesomeIcon icon={faQuoteLeft} />
          <p>{testimonial.copy}</p>
          <TestimonialName>
            <p>{testimonial.name}</p>{" "}
            <p>Ascendance Studio {testimonial.parent}</p>
          </TestimonialName>
        </Testimonial>
      ))}
    </Grid>
  )
}
