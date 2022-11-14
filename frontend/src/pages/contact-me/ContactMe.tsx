
import FaqSection from "../../layout/contact-me layout/FaqSection"
import FormSection from "../../layout/contact-me layout/FormSection"
const ContactMe = () => {
  document.getElementsByTagName("title")[0].innerText = "Ahmed Ben Tekaya-contactme"
  return (
    <main id="main-contactme">
      <FaqSection/>
      <FormSection/>
    </main>
  )
}

export default ContactMe