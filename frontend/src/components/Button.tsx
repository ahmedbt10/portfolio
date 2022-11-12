import {useMediaQuery} from "@chakra-ui/react"
const Button = ({content,src,id,respContent,respSrc}:{content:string,src:string,id:string,respContent:string,respSrc:string}) => {
  const [isSmallerThan408] = useMediaQuery('(max-width: 408px)')
  return (
    <button id={id} className="h6">
      {isSmallerThan408 && respContent!==""?respContent:content}
      {respSrc!==""&&isSmallerThan408?<img src={respSrc} alt="icon" width="32" height="32"/>:""}
      {src !== ""?<img src={src} alt="icon" width="32" height="32"/>:""}
      
    </button>
  )
}

export default Button