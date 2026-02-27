import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome Home</h1>
      <Link to={"/create-post"} >Create post</Link>
      <Link to={"/feed"} >Get Post</Link>
      <div className="w-full h-screen bg-zinc-800">
        <h1 className='font-[Open] text-8xl ' >PDF MANAGER</h1>
      </div>
    </div>
  )
}

export default Home
