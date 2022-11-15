import { useState } from "react"
import {Routes,Route} from "react-router-dom"
import { NameContext } from "./context/NameContext"
import Footer from "./layout/footer/Footer"
import Header from "./layout/header/Header"
import FirstModal from "./layout/home layout/Modal/FirstModal"
import { About } from "./pages/about/About"
import ContactMe from "./pages/contact-me/ContactMe"
import Home from "./pages/home/Home"

function App() {
  const [name, setName]:[string,React.Dispatch<React.SetStateAction<string>>] = useState("")
  return (
      
      
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<>
        <FirstModal setName={setName}/>
        <NameContext.Provider value={name}>
          <Home />
        </NameContext.Provider>
      </>}/>
            <Route path="/about" element={<NameContext.Provider value={name}>
          <About />
        </NameContext.Provider>}/>
            <Route path="/contact" element={<NameContext.Provider value={name}>
          <ContactMe />
        </NameContext.Provider>}/>
          </Routes>
          <Footer/>
        </div>
  )
}

export default App
