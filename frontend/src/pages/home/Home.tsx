import { useEffect } from "react"
import ContactSection from "../../layout/ContactSection"
import IntroSection from "../../layout/home layout/IntroSection"
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