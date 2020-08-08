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
  ListLink,
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
              <ListItem>
                <a
                  href="https://g.page/ascendancemiami?share"
                  target="_blank"
                  rel="noreferrer"
                >
                  10466 NW 31ST Terrace
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://g.page/ascendancemiami?share"
                  target="_blank"
                  rel="noreferrer"
                >
                  Doral, FL 33172{" "}
                </a>
              </ListItem>
              <ListItem>786-571-7778</ListItem>
            </FooterArea>
          </div>
          <FooterArea>
            <ListItemTitle>Classes by Style</ListItemTitle>
            <li>
              <ListLink to="/ballet">Ballet</ListLink>
            </li>
            <li>
              <ListLink to="/tap">Tap</ListLink>
            </li>
            <li>
              <ListLink to="/flamenco">Flamenco</ListLink>
            </li>
            <li>
              <ListLink to="/jazz">Jazz</ListLink>
            </li>
            <li>
              <ListLink to="/technique">Technique</ListLink>
            </li>
            <li>
              <ListLink to="/">
                <ListLink to="/hip-hop">Hip Hop</ListLink>
              </ListLink>
            </li>
            <li>
              <ListLink to="/contemporary">Contemporary</ListLink>
            </li>
            <li>
              <ListLink to="/ball-room">Ball Room</ListLink>
            </li>
            <li>
              <ListLink to="/lyrical">Lyrical</ListLink>
            </li>
            <li>
              <ListLink to="/acrobatics">Acrobatics</ListLink>
            </li>
          </FooterArea>
          <div>
            <FooterArea>
              <ListItemTitle>Classes by Ages</ListItemTitle>
              <li>
                <ListLink to="/3-4">3 to 4 Years Old</ListLink>
              </li>
              <li>
                <ListLink to="/5-6">5 to 6 Years Old</ListLink>
              </li>
              <li>
                <ListLink to="/7-9">7 to 9 Years Old</ListLink>
              </li>
              <li>
                <ListLink to="/10-12">10 to 12 Years Old</ListLink>
              </li>
              <li>
                <ListLink to="/teens">Teens</ListLink>
              </li>
            </FooterArea>
            <FooterArea style={{ marginTop: "20px" }}>
              <ListItemTitle>Classes by Program</ListItemTitle>
              <li>
                <ListLink to="/">Recreational Program</ListLink>
              </li>
              <li>
                <ListLink to="/">Competitive Program</ListLink>
              </li>
            </FooterArea>
          </div>
          <FooterArea>
            <ListItemTitle>Studio</ListItemTitle>
            <li>
              <ListLink to="/about">About</ListLink>
            </li>
            <li>
              <ListLink to="/facility">Facility</ListLink>
            </li>
            <li>
              <ListLink to="/blog">Blog</ListLink>
            </li>
            <li>
              <ListLink to="/jobs">Jobs</ListLink>
            </li>
            <li>
              <ListLink to="/ascendance-studio-company">
                Ascendance Studio Company
              </ListLink>
            </li>
            <li>
              <ListLink to="/summer-camp">Summer Camp</ListLink>
            </li>
          </FooterArea>
          <FooterArea>
            <ListItemTitle>Resources</ListItemTitle>
            <li>
              <ListLink to="/">Free Trial Class</ListLink>
            </li>
            <li>
              <ListLink to="/">Frequently Asked Questions</ListLink>
            </li>
            <li>
              <ListLink to="/">Recitals</ListLink>
            </li>
            <li>
              <ListLink to="/">Calendar of Events</ListLink>
            </li>
            <li>
              <ListLink to="/">Register Now</ListLink>
            </li>
            <li>
              <ListLink to="/">COVID-19 resources</ListLink>
            </li>
            <li>
              <ListLink to="/">Contact</ListLink>
            </li>
            <li>
              <ListLink to="/">Sitemap</ListLink>
            </li>
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
