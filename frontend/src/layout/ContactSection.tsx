import Button from "../components/Button"
import EmailPhone from "../components/EmailPhone"
import {Link} from "react-router-dom"
import "./_contactsection.scss"
import illustrationContact from "../assets/illustration-contact.png"
const ContactSection = () => {
  return (
    <section id="contact-section" className="big-section">
        <section id="contact-details-container">
          <section id="contact-details-section">
            <h1 className="h4">
              {`{name}! I'm currently 
                avaialable for freelance work.`}
            </h1>
            <p> 
              If you want to hire a developer that likes
              to get stuff done, let's talk.
            </p>
            <EmailPhone/>
          </section>
          <Link to="/contact">
            <Button
              content="Got a Project in Mind ? Contact Me!"
              src=""
              id="primary-btn"
              />
          </Link>
        </section>
        <section id="contact-svg">
          <img src={illustrationContact} alt="illustration-contact"/>
        </section>
    </section>
  )
}

export default ContactSection