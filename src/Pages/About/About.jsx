import React from 'react'
import SectionSeven from '../Homepage/SectionSeven'
import SectionFive from '../Homepage/SectionFive'
import SectionAbout from './SectionAbout'
import Missions from './Missions'

function About() {
  return (
    <div>
        <SectionAbout/>
        <Missions/>
        <SectionFive/>
        <SectionSeven/>
    </div>
  )
}

export default About