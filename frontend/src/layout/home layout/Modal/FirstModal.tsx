import {ChakraProvider,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter} from "@chakra-ui/react"
import {  useState } from "react"
import Button from "../../../components/Button";
import FormInput from "../../contact-me layout/formsection-components/FormInput";
import "./_firstmodal.scss"
import theme from "../../../style/theme"
const FirstModal = ({setName}:{setName:React.Dispatch<React.SetStateAction<string>>}) => {
    const [isOpen,setIsOpen]=useState(true);
    const [emptyError,setEmptyError] = useState(false);
    const [localName,setLocalName] =useState("");
    const whiteSpaceRegExp = /^\s+$/
    const handleClick=()=>{
        setEmptyError(localName === "" || whiteSpaceRegExp.test(localName));
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if (localName !== "" && !whiteSpaceRegExp.test(localName)){
            setName(localName);
            setIsOpen(false);
        }
    }
  return (
    <ChakraProvider theme={theme}>
        <Modal 
            isCentered
            size={"xl"}
            isOpen={isOpen} 
            onClose={()=>setIsOpen(false)}
            closeOnOverlayClick={false}
            >
            <ModalOverlay/>
            <ModalContent p="2em" margin={"1.33em"} gap={"1.77em"}>
                <h1 className="h4 secondary-color" style={{textAlign:"center"}}>Type your Name</h1>
                <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"1.77em",alignItems:"center"}}>
                        <FormInput 
                            placeholder="Your Name"
                            type="text"
                            emailError={false}
                            emptyError={emptyError}
                            onChange={setLocalName}
                            setEmptyError={setEmptyError}
                            setEmailError={()=>true}
                            />
                        <Button 
                            content="Continue" 
                            className="primary-btn" 
                            src="" id="modal-btn" 
                            respContent="" 
                            respSrc=""
                            onClick={handleClick}
                            />
                </form>
            </ModalContent>
        </Modal>
    </ChakraProvider>
  )
}

export default FirstModal