import Menu from "../assets/menuIcon.png"
import {useDisclosure} from "@chakra-ui/react"
import Navbar from "./Navbar"
const MenuIcon = ({ isOpen, onOpen, onClose }:{ isOpen:boolean, onOpen:Function, onClose:Function }) => {
    const handleClick = ()=>{
        isOpen?onClose():onOpen();
    }
  return (
        <button id="toggle-btn" onClick={()=>handleClick()}>
            <img src={Menu} id="menu-icon" alt="menu icon" width="32" height="32" />
        </button>
  )
}

export default MenuIcon