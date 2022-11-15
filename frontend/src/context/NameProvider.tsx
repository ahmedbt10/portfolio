import { NameContext } from './NameContext'

interface NameProviderProps {
    children: JSX.Element | JSX.Element[]
}

interface Name {
    name:string
}
const INITIAL_STATE:Name ={
    name:""
}
const NameProvider = ({children}:NameProviderProps) => {
  return (
    <NameContext.Provider value={INITIAL_STATE}>
        {children}
    </NameContext.Provider>
  )
}

export default NameProvider