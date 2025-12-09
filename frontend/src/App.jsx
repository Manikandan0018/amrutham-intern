
import './App.css'
import { Apoint } from './Home/Apoint.jsx'
import { Connect } from './Home/connect.jsx'
import { Faq } from './Home/Faq'
import { Footer } from './Home/Footer'
import Home from './Home/Home'
import { JoinOur } from './Home/joinOur'
import { Testimonal } from './Home/Testimonal'
import { WhyChoose } from './Home/WhyChoose'

function App() {


  return (
    <>
      <Home />
      <WhyChoose />
      <JoinOur />
      <Testimonal />
      <Faq />
      <Apoint />
      <Connect/>
      <Footer/>
    </>
  )
}

export default App
