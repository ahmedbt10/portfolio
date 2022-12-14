import AboutIntroSection from "../../layout/about layout/AboutIntroSection"
import Offers from "../../layout/about layout/Offers"
import Services from "../../layout/about layout/Services"
import Tools from "../../layout/about layout/Tools"
import ContactSection from "../../layout/ContactSection"
export const About = () => {
  document.getElementsByTagName("title")[0].innerText = "Ahmed Ben Tekaya-about"
  return (
    <main id="main-about">
      <AboutIntroSection/>
      <Offers/>
      <Services/> 
      <Tools/>
      <ContactSection />
    </main>
  )
}
