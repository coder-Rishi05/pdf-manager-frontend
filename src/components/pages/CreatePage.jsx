import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const CreatePage = () => {

 

  return (
    <div>
      <section className='create-post-section' >
        <form action="">
            <input type="file" name='image' accept='image/*' />
            <input type="text" name='caption' placeholder='caption'  />
            <input type='submit' />
        </form>
      </section>
      <Link to={"/"} >Go to home page</Link>
    </div>
  )
}

export default CreatePage
