import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Link to="/register">Register</Link>
    <br />
    <Link to="/login">Login</Link>
    <br />
    <Link to="/chat">Chat</Link>
    </>
  )
}

export default Navbar