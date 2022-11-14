import plusIconSrc from "../../../assets/plus-icon.png"
import minusIconSrc from "../../../assets/minus-icon.png"
import { useState } from "react";
const QuestionAnswer = ({question,answer}:{question:string,answer:string}) => {
    const [answerShown,setAnswerShown]=useState(false);
  return (
    <li className="list-item">
        <div className="list-item-question">
            <button className="question-btn" onClick={()=>setAnswerShown(!answerShown)}>
                <img src={answerShown?minusIconSrc:plusIconSrc} alt={answerShown?"hide-icon":"show-icon"} className="question-img"/>
            </button>
            <h2 className="h5">{question}</h2>
        </div>
        <p className="list-item-answer" style={{display:answerShown?"":"none"}}>
            {answer}
        </p>
    </li>
  )
}

export default QuestionAnswer