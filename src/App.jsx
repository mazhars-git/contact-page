import { useState } from 'react'
import Contact from './Components/Contact/Contact'
import ContactBanner from './Components/Contact/ContactBanner'
import ContactForm from './Components/Contact/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <ContactBanner />
      <Contact />
      <ContactForm />
    </div>
  )
}

export default App
