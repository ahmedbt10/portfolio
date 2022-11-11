import EmailPhone from "../../components/EmailPhone";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import SocialIcons from "../../components/SocialIcons";
import {useMediaQuery,useDisclosure} from "@chakra-ui/react";
import "./_header.scss";
import MenuIcon from "../../components/MenuIcon";
import { useEffect } from "react";
const Header = () => {
    const [isSmallerThan860] = useMediaQuery('(max-width: 860px)')
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
      !isSmallerThan860&&onClose();
    }, [isSmallerThan860])
    
  return (
    <header id="header" className="light">
        <div id="header-container">
            <section id="header-first-section">
                <Logo />
                {isSmallerThan860?"":<Navbar responsive={false}/>}
            </section>
            <section id="header-second-section">
                <EmailPhone/>
                {isSmallerThan860?"":
                <>
                    <div className="vertical-line"/>
                    <SocialIcons/>
                </>}
                
            </section>
            {isSmallerThan860?<MenuIcon isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>:""}
        </div>
        {isOpen&&isSmallerThan860?<Navbar responsive={isOpen}/>:""}
    </header>
  )
}

export default Header