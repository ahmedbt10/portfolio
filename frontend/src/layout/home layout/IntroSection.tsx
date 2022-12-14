import Button from "../../components/Button"
import arrowDown from "../../assets/arrow-down.png"
import "./_introsection.scss"
import { useContext } from "react"
import { NameContext } from "../../context/NameContext"
const IntroSection = () => {
  const name = useContext(NameContext);
  return (
    <section id="intro-section" className="big-section">
        <h1 className="h3">
          Hi {name?<span id="username">{name}</span>:""}, I'm Ahmed
        </h1>
        <h2 className="h1">
          Web Designer & Self-taught Developer
        </h2>
        <div className="separator">
            <section className="description">
            <p>
                I help business grow by designing and 
                developing amazing web user interfaces that 
                maximize the user experience. 
                I also have a basic knowledge in the 
                server side field.
            </p>
            </section>
            <Button content="See my Work" src={arrowDown} id="show-btn" className="primary-btn" respContent="" respSrc="" onClick={()=>true}/>
        </div>
      </section>
  )
}

export default IntroSection