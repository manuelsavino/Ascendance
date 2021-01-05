import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}!</p>
}

const Private = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Loading...</p>
  }

  const user = getProfile()

  return (
    <Layout user={user} logout={logout}>
      <nav>
        <Link to="/privates/">Home</Link>
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <Router>
        <Home path="/privates/" user={user} />
      </Router>
    </Layout>
  )
}

export default Private
