import React from 'react'
import Events from './Livestream'
import Navbar from './Navbar'
import Footer from './Footer'
import Livestream from './Livestream'

export default function Calendar() {
  return (
    <div className='bg-orange-300 max-h-screen'>
      <Navbar />
      <Livestream />
      <Footer />
    </div>
  )
}
