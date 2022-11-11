import React from 'react'
import {Link} from "react-router-dom"
const Navbar = ({responsive=false}:{responsive:boolean}) => {
  return (
    <nav id={responsive?"navbar-responsive":"navbar"}>
        <ul id="navlist">
            <li className="navlist-item">
              <Link className="h6" to="/about">About Me</Link>
            </li>
            <li className="navlist-item">
              <Link className="h6" to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar