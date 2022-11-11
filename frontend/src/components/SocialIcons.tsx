import Instagram from "../assets/instagram.png"
import Linkedin from "../assets/linkedin.png"
import Twitter from "../assets/twitter.png"

const SocialIcons = () => {
  return (
    <section id="social-media">
        <img src={Twitter} id="twitter" className="icon" alt="twitter" />
        <img src={Instagram} id="instagram" className="icon" alt="instagram" />
        <img src={Linkedin} id="linkedin" className="icon" alt="linkedin" />
    </section>
  )
}

export default SocialIcons