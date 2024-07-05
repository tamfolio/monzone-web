import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import SectionSeven from './SectionSeven'
import Footer from '../../Components/Footer/Footer'

function Homepage() {
  return (
    <div className='w-[100%]'>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
    </div>
  )
}

export default Homepage