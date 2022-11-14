import {Textarea,FormControl,FormErrorMessage,FormLabel} from "@chakra-ui/react"
import { useEffect, useState } from "react";
const FormTextArea = ({placeholder,emptyError,onChange,setEmptyError}:{placeholder:string,emptyError:boolean,onChange:Function,setEmptyError:React.Dispatch<React.SetStateAction<boolean>>}) => {
    

  return (
    <FormControl isInvalid={emptyError}>
        <FormLabel className="h6">Project details:</FormLabel>
        <Textarea 
            placeholder={placeholder}
            size="lg"
            fontWeight="semibold"
            color="black.90"
            borderWidth={"2px"}
            borderColor="black.25"
            focusBorderColor="black.75"
            backgroundColor="black.25"
            borderRadius="8px"
            _placeholder={{fontWeight:"semibold",color:"black.100"}}
            _hover={{backgroundColor:"black.10",borderColor:"black.75"}}
            _disabled={{opacity:0.50,backgroundColor:"black.10",color:"black.25"}}
            _invalid={{color:"error",borderColor:"error"}}
            onFocus={()=>setEmptyError(false)}
            onChange={(e)=>onChange(e.target.value)}
            />
            {emptyError&&<FormErrorMessage pl={"0.555em"} color={"error"}>{placeholder} are required.</FormErrorMessage>}
    </FormControl>
  )
}

export default FormTextArea