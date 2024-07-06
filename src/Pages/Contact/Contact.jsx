import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import SectionSeven from '../Homepage/SectionSeven'
import SectionContact from './SectionContact'
import ContactUs from './ContactUs'

function Contact() {
  return (
    <div>
        <SectionContact/>
        <ContactUs/>
        <SectionSeven/>
    </div>
  )
}

export default Contact