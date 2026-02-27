import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import CreatePage from './components/pages/CreatePage'
import Feed from './components/pages/Feed'
import Home from './components/pages/Home'
import Login from './auth/Login'
import About from './components/layouts/About'


const App = () => {
  return (
    <Router>
     <Routes>
      <Route path='/' element={<About />} />
      <Route path='/create-post' element={<CreatePage />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/login' element={<Login />} />
      </Routes> 
    </Router>
  )
}

export default App
