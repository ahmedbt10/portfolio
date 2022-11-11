import {Routes,Route} from "react-router-dom"
import Footer from "./layout/footer/Footer"
import Header from "./layout/header/Header"
import { About } from "./pages/about/About"
import ContactMe from "./pages/contact-me/ContactMe"
import Home from "./pages/home/Home"

function App() {
  
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<ContactMe />}/>
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
