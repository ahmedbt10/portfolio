import {FormControl,FormLabel,Input,FormErrorMessage} from "@chakra-ui/react"
const FormInput = (
    {placeholder,type,emailError,emptyError,onChange,setEmptyError,setEmailError}:
    {placeholder:string,type:string,emailError:boolean,emptyError:boolean,onChange:React.Dispatch<React.SetStateAction<string>>,
        setEmptyError:React.Dispatch<React.SetStateAction<boolean>>,
        setEmailError:React.Dispatch<React.SetStateAction<boolean>>
    }) => {
    return (
    <FormControl isInvalid={emptyError||emailError}>
        <FormLabel className="h6" fontWeight={"none"}>{`${placeholder}:`}</FormLabel>
        <Input 
            type={type} 
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
            onFocus={()=>{
                setEmptyError(false);
                setEmailError(false);
            }}
            onChange={(e)=>onChange(e.target.value)}
            />
        {emptyError?<FormErrorMessage pl={"0.555em"} color={"error"}>{placeholder} is required.</FormErrorMessage>:
            emailError?<FormErrorMessage pl={"0.555em"} color={"error"}>{placeholder} is invalid.</FormErrorMessage>:""}
    </FormControl>
  )
}

export default FormInput