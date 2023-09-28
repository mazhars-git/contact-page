import { useState } from 'react'
import Contact from './Components/Contact/Contact'
import ContactBanner from './Components/Contact/ContactBanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <ContactBanner />
      <Contact />
    </div>
  )
}

export default App
