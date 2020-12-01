import React, { useState } from "react"
import {
  StyledTopFooter,
  StyledOuterFooter,
  StyledBottomFooter,
  StyledInnerFooter,
  FooterArea,
  ListItem,
  Separator,
  LogoImage,
  Copy,
  Social,
  ListLink,
  ListItemTitlet,
  MobileImportant,
  FooterTryFreeClass,
} from "./footerStyled"

import LogoWhite from "../../images/logoWhite.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

export default function Footer({ children, hidefreeflass }) {
  const [mobileExpand, setMobileExpand] = useState({
    contact: false,
    hours: false,
    styles: false,
    ages: false,
    program: false,
    stutio: false,
    resources: false,
  })

  const handleClick = heading => {
    setMobileExpand({ ...mobileExpand, [heading]: !mobileExpand[heading] })
  }
  return (
    <StyledOuterFooter>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ea3ba1"
          fillOpacity="1"
          d="M0,192L34.3,202.7C68.6,213,137,235,206,229.3C274.3,224,343,192,411,160C480,128,549,96,617,106.7C685.7,117,754,171,823,197.3C891.4,224,960,224,1029,213.3C1097.1,203,1166,181,1234,170.7C1302.9,160,1371,160,1406,160L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <StyledBottomFooter>
        <StyledInnerFooter justify="space-between">
          <FooterTryFreeClass hidefreeflass={hidefreeflass} to="/free">
            Try A Free Class
          </FooterTryFreeClass>
          <MobileImportant>
            <ListItemTitlet expanded>Contact Us</ListItemTitlet>
            <FooterArea expanded>
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
                  Doral, FL 33172
                </a>
              </ListItem>
              <ListItem>
                <a href="tel:786-571-7778">786-571-7778</a>
              </ListItem>
            </FooterArea>
            <ListItemTitlet expanded style={{ marginTop: "20px" }}>
              Hours of Operation
            </ListItemTitlet>
            <FooterArea expanded>
              <ListItem>Monday - Friday: 5:00pm - 9:30pm</ListItem>
              <ListItem>Saturday:11:00am - 2:00pm</ListItem>
              <ListItem>Sunday: Closed</ListItem>
            </FooterArea>
          </MobileImportant>
          <div>
            <ListItemTitlet
              active={mobileExpand.styles}
              onClick={() => handleClick("styles")}
            >
              Classes by Style
            </ListItemTitlet>
            <FooterArea active={mobileExpand.styles}>
              <li>
                <ListLink to="/classes/ballet">Ballet</ListLink>
              </li>
              <li>
                <ListLink to="/classes/tap">Tap</ListLink>
              </li>
              <li>
                <ListLink to="/classes/flamenco">Flamenco</ListLink>
              </li>
              <li>
                <ListLink to="/classes/jazz">Jazz</ListLink>
              </li>
              <li>
                <ListLink to="/classes/technique">Technique</ListLink>
              </li>
              <li>
                <ListLink to="/classes/hip-hop">Hip Hop</ListLink>
              </li>
              <li>
                <ListLink to="/classes/contemporary">Contemporary</ListLink>
              </li>
              <li>
                <ListLink to="/classes/ballroom">Ballroom</ListLink>
              </li>
              <li>
                <ListLink to="/classes/lyrical">Lyrical</ListLink>
              </li>
              <li>
                <ListLink to="/classes/acrobatics">Acrobatics</ListLink>
              </li>
            </FooterArea>
          </div>
          <div>
            <ListItemTitlet
              active={mobileExpand.ages}
              onClick={() => handleClick("ages")}
            >
              Classes by Ages
            </ListItemTitlet>

            <FooterArea active={mobileExpand.ages}>
              <li>
                <ListLink to="/">3 to 4 Years Old</ListLink>
              </li>
              <li>
                <ListLink to="/">5 to 6 Years Old</ListLink>
              </li>
              <li>
                <ListLink to="/">7 to 9 Years Old</ListLink>
              </li>
              <li>
                <ListLink to="/">10 to 12 Years Old</ListLink>
              </li>
              <li>
                <ListLink to="/">Teens</ListLink>
              </li>
            </FooterArea>
            <ListItemTitlet
              active={mobileExpand.program}
              onClick={() => handleClick("program")}
              style={{ marginTop: "20px" }}
            >
              Classes by Program
            </ListItemTitlet>
            <FooterArea active={mobileExpand.program}>
              <li>
                <ListLink to="/">Recreational Program</ListLink>
              </li>
              <li>
                <ListLink to="/">Competitive Program</ListLink>
              </li>
            </FooterArea>
          </div>
          <div>
            <ListItemTitlet
              active={mobileExpand.stutio}
              onClick={() => handleClick("studio")}
            >
              Studio
            </ListItemTitlet>
            <FooterArea active={mobileExpand.studio}>
              <li>
                <ListLink to="/">About</ListLink>
              </li>
              <li>
                <ListLink to="/facility">Facility</ListLink>
              </li>
              <li>
                <ListLink to="/">Blog</ListLink>
              </li>
              <li>
                <ListLink to="/">Jobs</ListLink>
              </li>
              <li>
                <ListLink to="/">Ascendance Studio Company</ListLink>
              </li>
              <li>
                <ListLink to="/">Summer Camp</ListLink>
              </li>
            </FooterArea>
          </div>
          <div>
            <ListItemTitlet
              active={mobileExpand.resources}
              onClick={() => handleClick("resources")}
            >
              Resources
            </ListItemTitlet>
            <FooterArea active={mobileExpand.resources}>
              <li>
                <ListLink to="/free">Free Trial Class</ListLink>
              </li>
              <li>
                <ListLink to="/authorization">Authorization</ListLink>
              </li>
              <li>
                <ListLink to="/live">Live Stream</ListLink>
              </li>
              <li>
                <ListLink to="/faq">Frequently Asked Questions</ListLink>
              </li>
              <li>
                <ListLink to="/">Recitals</ListLink>
              </li>
              <li>
                <ListLink to="/">Calendar of Events</ListLink>
              </li>
              <li>
                <ListLink to="/registration">Register Now</ListLink>
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
          </div>
        </StyledInnerFooter>

        <StyledInnerFooter justify="center">
          <LogoImage src={LogoWhite} alt="Ascesdance studio logo" />
        </StyledInnerFooter>
        <Separator />
        <StyledInnerFooter justify="space-between">
          <Copy>&copy; {new Date().getFullYear()} Ascendance Studio </Copy>
          <Social>
            <a
              href="https://www.facebook.com/ascendanceMiami"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/ascendanceMiami"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/c/AscendanceStudio/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Social>
        </StyledInnerFooter>
      </StyledBottomFooter>
    </StyledOuterFooter>
  )
}
