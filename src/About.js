import React from 'react'
import Navi from './components/Navi'
import Heroimg2 from './components/Heroimg2'
import Footer from './Footer'
import AboutContent from './components/AboutContent'

const About = () => {
  return (
    <div>
      <Navi />
      <Heroimg2 heading="ABOUT." text="Im a Java Full Stack Developer" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About