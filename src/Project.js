import React from 'react'
import Navi from './components/Navi'
import Footer from './Footer'
import Heroimg2 from './components/Heroimg2'
import Work from './components/Work'

const Project = () => {
  return (
    <div>
      <Navi />
      <Heroimg2 heading="PROJECTS." text="some of most recent works" />
      <Work />
      <Footer />
      </div>
  )
}

export default Project