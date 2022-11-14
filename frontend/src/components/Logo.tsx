import {Link} from "react-router-dom"
import logoSrc from "../assets/AB10.png"
const Logo = () => {
  return (
      <Link to="/">
        <img src={logoSrc} alt="logo" id="logo"/>
      </Link>
    
  )
}

export default Logo