import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Livestream from './Livestream'

export default function AddLivestream() {
  return (
    <div>
        <Navbar />
        
      <div className="bg-orange-300 mb-16">
        
        <div className="flex flex-col items-center py-2">
          <div className="flex flex-row space-x-10 mt-4 z-20">
          <input type="text" placeholder="Add URL"   />

            <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" style={{ width: "100%" }}>Add Livestream</button> 
          </div>
        </div>
    
    <Livestream />
    </div>
    <Footer />
    
    </div>
  )
}
