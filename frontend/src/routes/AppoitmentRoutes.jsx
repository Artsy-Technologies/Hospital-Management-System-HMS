import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Components/appointment/Navbar'
import Footer from '../Components/appointment/Footer'
import AppoitmentPage from '../pages/AppoitmentPage'
const AppoitmentRoutes = () => {
  return (
    <div>
        <Navbar />
        <div className='min-h-[70vh] '>
            <AppoitmentPage />
        </div>
        <Footer />
    </div>
  )
}

export default AppoitmentRoutes