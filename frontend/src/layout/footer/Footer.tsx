import "./_footer.scss"
import {useMediaQuery} from "@chakra-ui/react"
import SocialIcons from "../../components/SocialIcons"
const Footer = () => {
    const [isSmallerThan860] = useMediaQuery('(max-width: 860px)')
  return (
    <footer id="footer" className="light">
        <section id="footer-first-section">
            <p id="copyright">Ahmed Ben 10 &#169; 2022, all rights reserved.</p>
        </section>
    
        <section id="footer-second-section">
            <section className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </section>
            {isSmallerThan860?"":<div className="vertical-line"/>}
            <SocialIcons/>
        </section>
    </footer>
  )
}

export default Footer