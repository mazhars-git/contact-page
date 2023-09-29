import { useState } from 'react'
import Contact from './Components/Contact/Contact'
import ContactBanner from './Components/Contact/ContactBanner'
import ContactForm from './Components/Contact/ContactForm'
import MapLocation from './Components/Contact/MapLocation'

function App() {

  return (
    <div className="">
      <ContactBanner />
      <Contact />
      <MapLocation />
      <ContactForm />     
    </div>
  )
}

export default App
