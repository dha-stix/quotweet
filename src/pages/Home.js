import React from 'react'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

const Home = () => {
  
  return (
    <div className="w-full max-h-[100vh]">
      <Nav/>
      <Hero/>
    </div>
  )
}

export default Home