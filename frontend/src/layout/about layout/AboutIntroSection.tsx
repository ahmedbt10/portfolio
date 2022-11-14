import Gallery from "../../components/Gallery"
import "./_aboutintrosection.scss"
const AboutIntroSection = () => {
  return (
    <section id="introduction">
        <h1 className="h3" id="greeting">I'am Ahmed Ben Tekaya</h1>
        <section id="person-description">
          <p>
           I was born in Tunisia in the 20th may 2000 
          {` (`}in case you want to surprise me on my birthday &#128513; {`)`}. 
          From an early age I showed interset for computers and technology
          and that grew into a passion during high school.
          </p>
          <p>
            I am a self-taught frontend developer.
            I joined the field of web design and development in
            <time dateTime="2019-01-01" className="primary-color"> 2019</time>. 
            And since then I have tried to learn everything related 
            to this huge field, especially the client side.
          </p>
          <p>
          I currently live in Italy and I am a student at 
          <em className="primary-color"> the University of Federico &#8545;, Naples.</em>
          </p>
        </section>
        <Gallery/>
    </section>
  )
}

export default AboutIntroSection