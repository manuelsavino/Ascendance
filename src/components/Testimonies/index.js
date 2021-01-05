import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { Testimonial, TestimonialName, Grid } from "./styledTestimonies"

export default function Testimonies({ lang }) {
  const testimonials = {
    en: [
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
    ],

    es: [
      {
        copy:
          "El recital estuvo excelente, muy bien organizado. Vivi la experiencia desde el público y desde los camerinos y fue increíble. Mi hija estaba feliz. Estoy muy contenta de haber inscrito a mi hija en Ascendance son gente seria, responsable, orientados hacia la excelencia y sobre todo una ejemplar vocación hacia lo que hacen. Deseo que sigan cosechando éxitos.",
        name: "Daniela",
        parent: "Mama de Ascendance Studio",
      },
      {
        copy:
          "Mis hijas estan muy felices de estar en el estudio, han aprendido muchisimo, de verdad que los recomiendo, las clases son muy dinamicas.",
        name: "Magua",
        parent: "Mama de Ascendance Studio",
      },
      {
        copy:
          "Una academia pequeña, donde se enfocan en la tecnica, en que cada niña se exprese bailando y sea disciplinada.",
        name: "Audry",
        parent: "Mama de Ascendance Studio",
      },
      {
        copy:
          "La verdad a mi hija le encanta, la profesora es muy amorosa con ella y todos los q trabajan ahi son muy atentos.. Excelente lugar",
        name: "Maria",
        parent: "Mama de Ascendance Studio",
      },
    ],
  }

  return (
    <Grid>
      {testimonials[lang].map(testimonial => (
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
