import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import CreatePage from './components/pages/CreatePage'
import Feed from './components/pages/Feed'
import Home from './components/pages/Home'


const App = () => {
  return (
    <Router>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create-post' element={<CreatePage />} />
      <Route path='/feed' element={<Feed />} />
      </Routes> 
    </Router>
  )
}

export default App
