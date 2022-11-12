const Button = ({content,src,id}:{content:string,src:string,id:string}) => {
  return (
    <button id={id} className="h6">
        {content}
        {src !== ""?<img src={src} alt="icon" width="32" height="22"/>:""}
    </button>
  )
}

export default Button