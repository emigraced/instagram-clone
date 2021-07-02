import React from 'react'
import '../styles/app.css'
import { Nav } from './Nav'
import { StoryBar } from './StoryBar'
import { Post } from './Post'

const App = () => {
  return (
    <>
      <Nav/>
      <StoryBar/>
      <Post/>
      <Post/>
      <Post/>
      
    </>
  )
}

export default App
