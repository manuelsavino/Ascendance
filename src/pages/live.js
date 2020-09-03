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
const ChooseRoom = ({ selectRoom }) => (
  <>
    <SubHeading>Please choose a room</SubHeading>
    <div>
      <Button
        onClick={() => {
          selectRoom("ascpinkroom")
        }}
      >
        Pink Room
      </Button>
      <Button
        onClick={() => {
          selectRoom("ascgreenkroom")
        }}
      >
        Green Room
      </Button>
      <Button
        onClick={() => {
          selectRoom("ascstudio1")
        }}
      >
        Studio 1
      </Button>
    </div>
  </>
)

const LiveStream = () => {
  const [room, setRoom] = useState("")
  const [cheetoPw, setCheetoPW] = useState("")

  if (cheetoPw !== "7865717778") {
    return (
      <Layout>
        <SEO title="Live Stream" />
        <Container flex column height="30vh" pb="0">
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
    <SubHeading>{room}</SubHeading>
    <VideoContainer>
      <SingleVideoCotnainer>
        <iframe
          src={`https://player.twitch.tv/?channel=${room}&parent=localhost&muted=true`}
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
