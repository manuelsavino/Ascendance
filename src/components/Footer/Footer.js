import React from "react"
import {
  StyledTopFooter,
  StyledOuterFooter,
  StyledBottomFooter,
  StyledInnerFooter,
  ListItemTitle,
  FooterArea,
  ListItem,
} from "./footerStyled"
import LogoWhite from "../../images/logoWhite.svg"

export default function Footer({ children }) {
  return (
    <StyledOuterFooter>
      <StyledTopFooter />
      <StyledBottomFooter>
        <StyledInnerFooter>
          <FooterArea>
            <ListItemTitle>Hours Of Operation</ListItemTitle>
            <ListItem>Monday: 5:00pm - 9:30pm</ListItem>
            <ListItem>Tuesday: 5:00pm - 9:30pm</ListItem>
            <ListItem>Wednesday: 5:00pm -9:30pm</ListItem>
            <ListItem>Thursday: 5:00pm - 9:30pm</ListItem>
            <ListItem>Friday: 5:00pm - 9:30pm</ListItem>
            <ListItem>Saturday:11:00am - 2:00pm</ListItem>
            <ListItem>Sunday: Closed</ListItem>
          </FooterArea>
          <FooterArea>
            <ListItemTitle>Classes by Style</ListItemTitle>
            <ListItem>Ballet </ListItem>
            <ListItem>TapHours Of PO</ListItem>
            <ListItem>Flamenco</ListItem>
            <ListItem>Jazz</ListItem>
            <ListItem>Technique</ListItem>
            <ListItem>Hip Hop</ListItem>
            <ListItem>Contemporary</ListItem>
            <ListItem>Ball Room</ListItem>
            <ListItem>Lyrical</ListItem>
            <ListItem>Acrobatics</ListItem>
          </FooterArea>
          <FooterArea>
            <ListItemTitle>Classes by Ages</ListItemTitle>
            <ListItem>3 to 4 Years Old</ListItem>
            <ListItem>5 to 6 Years Old</ListItem>
            <ListItem>7 to 9 Years Old</ListItem>
            <ListItem>10 to 12 Years Old</ListItem>
            <ListItem>Teens</ListItem>
          </FooterArea>
          <FooterArea>
            <ListItemTitle>Classes by Program</ListItemTitle>
            <ListItem>Recreational Program</ListItem>
            <ListItem>Competitive Program</ListItem>
          </FooterArea>
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
      </StyledBottomFooter>
    </StyledOuterFooter>
  )
}
