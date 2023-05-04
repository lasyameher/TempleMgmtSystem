import React from 'react'
import Events from './Events'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Calendar() {
  return (
    <div className='bg-orange-300 min-h-screen'>
      <Navbar />
      <Events />
      <Footer />
    </div>
  )
}
