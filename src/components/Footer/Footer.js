import React from "react"
import {
  StyledTopFooter,
  StyledOuterFooter,
  StyledBottomFooter,
  StyledInnerFooter,
  ListItemTitle,
  FooterArea,
  ListItem,
  Separator,
  LogoImage,
  Copy,
  Social,
} from "./footerStyled"
import LogoWhite from "../../images/logoWhite.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

export default function Footer({ children }) {
  return (
    <StyledOuterFooter>
      <StyledTopFooter />
      <StyledBottomFooter>
        <StyledInnerFooter justify="space-between">
          <div>
            <FooterArea>
              <ListItemTitle>Hours Of Operation</ListItemTitle>
              <ListItem>Monday - Friday: 5:00pm - 9:30pm</ListItem>
              <ListItem>Saturday:11:00am - 2:00pm</ListItem>
              <ListItem>Sunday: Closed</ListItem>
            </FooterArea>
            <FooterArea style={{ marginTop: "20px" }}>
              <ListItemTitle>Contact Us</ListItemTitle>
              <ListItem>10466 NW 31ST Terrace</ListItem>
              <ListItem>Doral, FL 33172 </ListItem>
              <ListItem>786-571-7778</ListItem>
            </FooterArea>
          </div>
          <FooterArea>
            <ListItemTitle>Classes by Style</ListItemTitle>
            <ListItem>
              <Link to="">Ballet</Link>
            </ListItem>
            <ListItem>Tap</ListItem>
            <ListItem>Flamenco</ListItem>
            <ListItem>Jazz</ListItem>
            <ListItem>Technique</ListItem>
            <ListItem>Hip Hop</ListItem>
            <ListItem>Contemporary</ListItem>
            <ListItem>Ball Room</ListItem>
            <ListItem>Lyrical</ListItem>
            <ListItem>Acrobatics</ListItem>
          </FooterArea>
          <div>
            <FooterArea>
              <ListItemTitle>Classes by Ages</ListItemTitle>
              <ListItem>3 to 4 Years Old</ListItem>
              <ListItem>5 to 6 Years Old</ListItem>
              <ListItem>7 to 9 Years Old</ListItem>
              <ListItem>10 to 12 Years Old</ListItem>
              <ListItem>Teens</ListItem>
            </FooterArea>
            <FooterArea style={{ marginTop: "20px" }}>
              <ListItemTitle>Classes by Program</ListItemTitle>
              <ListItem>Recreational Program</ListItem>
              <ListItem>Competitive Program</ListItem>
            </FooterArea>
          </div>
          <FooterArea>
            <ListItemTitle>Studio</ListItemTitle>
            <ListItem>About</ListItem>
            <ListItem>Facility</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Jobs</ListItem>
            <ListItem>Ascendance Studio Company</ListItem>
            <ListItem>Summer Camp</ListItem>
          </FooterArea>
          <FooterArea>
            <ListItemTitle>Resources</ListItemTitle>
            <ListItem>Free Trial Class</ListItem>
            <ListItem>Frequently Asked Questions</ListItem>
            <ListItem>Recitals</ListItem>
            <ListItem>Calendar of Events</ListItem>
            <ListItem>Register Now</ListItem>
            <ListItem>COVID-19 resources</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>Sitemap</ListItem>
          </FooterArea>
        </StyledInnerFooter>

        <StyledInnerFooter justify="center">
          <LogoImage src={LogoWhite} />
        </StyledInnerFooter>
        <Separator />
        <StyledInnerFooter justify="space-between">
          <Copy>&copy; {new Date().getFullYear()} Ascendance Studio </Copy>
          <Social>
            <a href="https://www.facebook.com/ascendanceMiami" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/ascendanceMiami" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/c/AscendanceStudio/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Social>
        </StyledInnerFooter>
      </StyledBottomFooter>
    </StyledOuterFooter>
  )
}
