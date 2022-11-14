import "./_faq.scss"
import {useMediaQuery} from "@chakra-ui/react"
import QuestionAnswer from "./faq-components/QuestionAnswer"
import illustrationSrc from "../../assets/illustration-question.png"
const FaqSection = () => {
    const [isSmallerThan898] = useMediaQuery('(max-width: 898px)')
    const questions =[
        {
            question:"What timezone are you in?",
            answer:"I live in Italy so CET (UTC +1)."
        },
        {
            question:"Do we make a contract?",
            answer:`Absolutely. A contract protects 
            us both and ensures that both parties 
            have a good collaboration.`
        },
        {
            question:"How much do you charge for a website?",
            answer:`There is no fixed price. 
            Every website is different and I'll only be 
            able to give an accurate offer once we've had a talk.`
        },
    ]
  return (
    <section id="faq-section">
        <section id="faq-section-details">
            <h1 className="h3-bold">
                Before messaging me, 
                here are some things you <span className="primary-color">should</span> know:
            </h1>
            <ul id="questions-list">
                {questions.map((question,index)=><QuestionAnswer key={"question"+index} question={question.question} answer={question.answer}/>)}
            </ul>
        </section>
        {isSmallerThan898?"":
            <section id="faq-section-illustration">
                <img src={illustrationSrc} alt="question-illustration"/>
            </section>
        }
    </section>
  )
}

export default FaqSection