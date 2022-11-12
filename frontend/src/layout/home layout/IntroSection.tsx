import Button from "../../components/Button"
import arrowDown from "../../assets/arrow-down.png"
import "./_introsection.scss"
const IntroSection = () => {
  return (
    <section id="intro-section" className="big-section">
        <h1 className="h3">
          {`Hi ${"{name}"}, I'm Ahmed`}
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
            <Button content="See my Work" src={arrowDown} id="primary-btn" respContent="" respSrc=""/>
        </div>
      </section>
  )
}

export default IntroSection