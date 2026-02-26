import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome Home</h1>
      <Link to={"/create-post"} >Create post</Link>
      <Link to={"/feed"} >Get Post</Link>
    </div>
  )
}

export default Home
