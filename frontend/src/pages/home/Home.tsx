import ContactSection from "../../layout/ContactSection"
import IntroSection from "../../layout/home layout/IntroSection"
import WorkSection from "../../layout/home layout/WorkSection"
import "./_home.scss"
const Home = () => {
  return (
    <main id="main-home">
      <IntroSection/>
      <WorkSection/>
      <ContactSection/>
    </main>
  )
}

export default Home