import Instagram from "../assets/instagram.png"
import Linkedin from "../assets/linkedin.png"
import Twitter from "../assets/twitter.png"
const SocialIcons = () => {
  return (
    <section id="social-media">
      <a target="_blank" href="https://twitter.com/Cannaj0int">
        <img src={Twitter} id="twitter" className="icon" alt="twitter" />
      </a>
      <a target="_blank" href="https://www.instagram.com/ahmed_bt9">
        <img src={Instagram} id="instagram" className="icon" alt="instagram" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/ahmed-ben-tekaya-157a47200">
        <img src={Linkedin} id="linkedin" className="icon" alt="linkedin" />
      </a>
    </section>
  )
}

export default SocialIcons