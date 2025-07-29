import React from 'react'
import Navbar from '../Components/appointment/Navbar'
import Hero from '../Components/appointment/Hero'
import AboutUs from '../Components/appointment/AboutUs'
import BookAppointment from '../Components/appointment/BookAppoitment'

const AppoitmentPage = () => {
  return (
    <div className='w-screen overflow-hidden'>
        <Hero />
        <AboutUs />
        <BookAppointment />
    </div>
  )
}

export default AppoitmentPage