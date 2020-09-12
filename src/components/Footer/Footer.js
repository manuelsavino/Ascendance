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
      <StyledTopFooter />
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
                <ListLink to="/faq">Frequently Asked Questions</ListLink>
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
          </div>
        </StyledInnerFooter>

        <StyledInnerFooter justify="center">
          <LogoImage src={LogoWhite} />
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
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Social>
        </StyledInnerFooter>
      </StyledBottomFooter>
    </StyledOuterFooter>
  )
}
