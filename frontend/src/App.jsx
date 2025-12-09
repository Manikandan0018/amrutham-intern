
import './App.css'
import { Apoint } from './Home/Apoint.jsx'
import { Choose } from './Home/Choose.jsx'
import { Contact } from './Home/Contact.jsx'
import { Faq } from './Home/Faq.jsx'
import { Footer } from './Home/Footer.jsx'
import Home from './Home/Home.jsx'
import { Join } from './Home/Join.jsx'
import { Testimonal } from './Home/Testimonal'

function App() {


  return (
    <>
      <Home />
      <Choose/>
      <Join/>
      <Testimonal />
      <Faq />
      <Apoint />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
