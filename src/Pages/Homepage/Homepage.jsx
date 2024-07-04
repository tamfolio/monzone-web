import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'

function Homepage() {
  return (
    <div className='w-[100%]'>
        <Navbar/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
    </div>
  )
}

export default Homepage