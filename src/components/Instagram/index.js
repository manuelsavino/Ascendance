import React, { useState, useEffect } from "react"
import Loading from "../../images/loading.svg"
import {
  SocialGrid,
  PostImage,
  SocialHeadline,
  OuterSocial,
  FollowUs,
} from "./intagramStyled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Instagram() {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const res = await fetch("/.netlify/functions/getIgPost")
    const posts = await res.json()
    setPosts(posts)
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
    // eslint-disable-line no-use-before-define
  }, [])

  if (loading) {
    return (
      <img
        style={{ display: "block", margin: "auto" }}
        alt="loading image animation"
        src={Loading}
      />
    )
  }
  return (
    <OuterSocial>
      <SocialHeadline>
        <FontAwesomeIcon icon={faInstagram} />
        Latest In Our Dance World
      </SocialHeadline>
      <SocialGrid>
        {posts.map(post => (
          <PostImage
            image={post.thumbnail}
            href={post.url}
            key={post.id}
            target="_blank"
            rel="noopener noreferrer"
          ></PostImage>
        ))}
      </SocialGrid>
      <FollowUs
        href="https://www.instagram.com/ascendanceMiami"
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow us for more <span>@ascendancemiami</span>
      </FollowUs>
    </OuterSocial>
  )
}
