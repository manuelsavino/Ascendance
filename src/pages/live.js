import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  VideoContainer,
  SingleVideoCotnainer,
} from "../components/common/layout"
import colors from "../components/common/colors"
import { SubHeading } from "../components/common/copy"

export const PassWord = styled.input`
  height: 30px;
  border: solid 1px #c0c0c0;
  border-radius: 3px;
`

export const PassWordLabel = styled.label`
  color: ${colors.secondary};
  padding-bottom: 5px;
`

export const Button = styled.button`
  background-color: ${colors.primary};
  border: none;
  margin-right: 5px;
  background-image: linear-gradient(
    150deg,
    ${colors.secondary} 50%,
    transparent 50%
  );
  background-position: 100%;
  background-size: 400%;
  transition: background 500ms ease-in-out;
  position: relative;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    background-position: 0;
    cursor: pointer;
  }
`

const LiveSubHeading = styled(SubHeading)`
  text-align: center;
  /* margin-top: 0; */
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding-bottom: 10px;
    font-weight: 400;
    margin-top: 40px;
  }
`
const ChooseRoom = ({ selectRoom }) => (
  <>
    <LiveSubHeading>Please choose a room</LiveSubHeading>
    <div>
      <Button
        onClick={() => {
          selectRoom({ twitch: "ascpinkroom", name: "Pink Room" })
        }}
      >
        Pink Room
      </Button>
      <Button
        onClick={() => {
          selectRoom({ twitch: "ascgreenkroom", name: "Green Room" })
        }}
      >
        Green Room
      </Button>
      <Button
        onClick={() => {
          selectRoom({ twitch: "ascstudio1", name: "Studio 1" })
        }}
      >
        Studio 1
      </Button>
    </div>
  </>
)

const LiveStream = () => {
  const [room, setRoom] = useState()
  const [cheetoPw, setCheetoPW] = useState("")
  const possiblePw = ["7865717778", `dance${new Date().getDate() + 1}`]
  if (possiblePw.indexOf(cheetoPw) < 0) {
    return (
      <Layout>
        <SEO title="Live Stream" />
        <Container column flex height="40vh" pb="0">
          <LiveSubHeading>
            For the safety of our dancers, this section of our website is
            password protected.
          </LiveSubHeading>
          <LiveSubHeading style={{ marginTop: "0", marginBottom: "20px" }}>
            Please contact the front desk for assistance.
          </LiveSubHeading>
          <PassWordLabel htmlFor="password">Password</PassWordLabel>
          <PassWord
            name="password"
            type="password"
            value={cheetoPw}
            onChange={e => setCheetoPW(e.target.value)}
          />
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="Live Stream" />
      <Container column flex height="30vh" pb="0">
        {room ? <Video room={room} /> : <ChooseRoom selectRoom={setRoom} />}
      </Container>
    </Layout>
  )
}

const Video = ({ room }) => (
  <>
    {console.log(room)}
    <LiveSubHeading>{room.name}</LiveSubHeading>
    <VideoContainer>
      <SingleVideoCotnainer>
        <iframe
          src={`https://player.twitch.tv/?channel=${room.twitch}&parent=doraldance.com&muted=true`}
          height="720"
          width="1280"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true"
        ></iframe>
      </SingleVideoCotnainer>
    </VideoContainer>
  </>
)

export default LiveStream
