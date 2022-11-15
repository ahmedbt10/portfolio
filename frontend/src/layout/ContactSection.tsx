import Button from "../components/Button"
import EmailPhone from "../components/EmailPhone"
import {Link} from "react-router-dom"
import {useMediaQuery} from "@chakra-ui/react"
import "./_contactsection.scss"
import illustrationContact from "../assets/illustration-contact.png"
import { useContext } from "react"
import { NameContext } from "../context/NameContext"
const ContactSection = () => {
  const [isSmallerThan776] = useMediaQuery('(max-width: 776px)')
  const name=useContext(NameContext);
  return (
    <section id="contact-section" className="big-section">
        <section id="contact-details-container">
          <section id="contact-details-section">
            <h1 className="h4">
            {name?<><span id="username" className="primary-color">{name}</span> !</>:""}  I'm currently 
                avaialable for freelance work.
            </h1>
            <p> 
              If you want to hire a developer that likes
              to get stuff done, let's talk.
            </p>
            <EmailPhone/>
          </section>
          <Link to="/contact" id="link-btn">
            <Button
              content="Got a Project in Mind ? Contact Me!"
              src=""
              id="toContact-btn"
              className="primary-btn"
              respContent="Contact Me!"
              respSrc=""
              onClick={()=>true}
              ></Button>
          </Link>
        </section>
        {isSmallerThan776?"":
        <section id="contact-svg">
          <img src={illustrationContact} alt="illustration-contact"/>
        </section>
        }
    </section>
  )
}

export default ContactSection