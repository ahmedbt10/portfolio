import "./_form.scss"
import {ChakraProvider,FormControl,FormLabel,Input,Textarea} from "@chakra-ui/react"
import sendIconSrc from "../../../assets/send.png"
import Button from "../../../components/Button"
import theme from "../../../style/theme"
import FormInput from "./FormInput"
import FormTextArea from "./FormTextArea"
import React, { useState } from "react"
const Form = () => {
    const [email,setEmail]=useState("")
    const [emptyEmail,setEmptyEmail]=useState(false)
    const [emailError,setEmailError]=useState(false)

    const [name,setName]=useState("")
    const [emptyName,setEmptyName]=useState(false)

    const [details,setDetails]=useState("")
    const [emptyDetails,setEmptyDetails]=useState(false)

    const [budget,setBudget]=useState("")
    const [emptyBudget,setEmptyBudget]=useState(false)

    const [timeline,setTimeline]=useState("")
    const [emptyTimeline,setEmptyTimeline]=useState(false)

    let thereError = true;
    console.log("empty:",emptyEmail)
    console.log(thereError);

    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleClick= ()=>{
         setEmailError(!regExp.test(email));
         setEmptyEmail(email === "");
         setEmptyName(name === "");
         setEmptyDetails(details === "");
         setEmptyBudget(budget === "");
         setEmptyTimeline(timeline === "");
         thereError=emptyEmail||(emptyName||emptyDetails||emptyBudget||emptyTimeline||emailError);
         console.log(thereError)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if (!thereError) alert("sumbit")
    }
  return (
    <ChakraProvider theme={theme}>
        <form id="form" onSubmit={(e)=>handleSubmit(e)}>
            <div id="form-fields">
                <div className="form-block">
                    <FormInput setEmailError={()=>true} setEmptyError={setEmptyName}  emptyError={emptyName}  emailError={false} placeholder="Name" type="text" onChange={setName}/>
                    <FormInput setEmailError={setEmailError} setEmptyError={setEmptyEmail} emptyError={emptyEmail} emailError={emailError} placeholder="Email" type="email" onChange={setEmail}/>
                </div>
                
                <FormTextArea  setEmptyError={setEmptyDetails} emptyError={emptyDetails} placeholder="Project details" onChange={setDetails}/>

                <div className="form-block">
                    <FormInput setEmailError={()=>true} setEmptyError={setEmptyBudget} emptyError={emptyBudget} emailError={false} placeholder="Budget Range" type="text" onChange={setBudget}/>
                    <FormInput setEmailError={()=>true} setEmptyError={setEmptyTimeline} emptyError={emptyTimeline} emailError={false} placeholder="Timeline" type="text" onChange={setTimeline}/>
                </div>
            </div>
            <Button
                content="Send Me That" 
                src={sendIconSrc} 
                id="primary-btn" 
                respContent="Send" 
                respSrc={sendIconSrc} 
                onClick={()=>handleClick()}
                />
        </form>
    </ChakraProvider>
  )
}

export default Form