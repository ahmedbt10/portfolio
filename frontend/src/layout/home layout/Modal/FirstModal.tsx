import {ChakraProvider,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter} from "@chakra-ui/react"
import {  useState } from "react"
import Button from "../../../components/Button";
import FormInput from "../../contact-me layout/formsection-components/FormInput";
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
            alert("done");
            setIsOpen(false);
        }
    }
    // const nameContext=useContext(NameContext);
    // console.log(nameContext.value)
  return (
    <ChakraProvider theme={theme}>
        <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader textAlign="center">Type your Name</ModalHeader>
                <form onSubmit={handleSubmit}>
                    <ModalBody>
                        <FormInput 
                            placeholder="Your Name"
                            type="text"
                            emailError={false}
                            emptyError={emptyError}
                            onChange={setLocalName}
                            setEmptyError={setEmptyError}
                            setEmailError={()=>true}
                            />
                    </ModalBody>
                    <ModalFooter justifyContent="center">
                        <Button 
                            content="Continue" 
                            className="primary-btn" 
                            src="" id="modal-btn" 
                            respContent="" 
                            respSrc=""
                            onClick={handleClick}
                            />
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    </ChakraProvider>
  )
}

export default FirstModal