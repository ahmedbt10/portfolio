import {useMediaQuery} from "@chakra-ui/react"
const Button = ({content,src,id,respContent,respSrc,onClick,className}:{content:string,src:string,id:string,respContent:string,respSrc:string,onClick:Function;className:string}) => {
  const [isSmallerThan430] = useMediaQuery('(max-width: 430px)')
  return (
    <button id={id} className={"h6 "+className} onClick={()=>onClick()}>
      {isSmallerThan430 && respContent!==""?respContent:content}
      {respSrc!==""&&isSmallerThan430?<img src={respSrc} alt="icon" width="32" height="32"/>:""}
      {src !== ""&&!isSmallerThan430?<img src={src} alt="icon" width="32" height="32"/>:""}
      
    </button>
  )
}

export default Button