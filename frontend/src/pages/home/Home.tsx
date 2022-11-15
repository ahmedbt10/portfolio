import { useEffect, useState } from "react"
import  {NameContext}  from "../../context/NameContext"
import ContactSection from "../../layout/ContactSection"
import IntroSection from "../../layout/home layout/IntroSection"
import FirstModal from "../../layout/home layout/Modal/FirstModal"
import WorkSection from "../../layout/home layout/WorkSection"
const Home = () => {
  document.getElementsByTagName("title")[0].innerText = "Ahmed Ben Tekaya-home"
  
  return (
      <main id="main-home">
        <IntroSection/>
        <WorkSection/>
        <ContactSection/>
      </main>
  )
}

export default Home