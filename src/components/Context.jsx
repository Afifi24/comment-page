import React, { useState ,createContext} from 'react'
export const toogleContext = createContext() 
const ProviderCard = ({children}) => {
    const [counter,setCounter] = useState(0)
    const [color,setColor] = useState()
    const [circle,setCirle] = useState()
    const Add = ()=>{
      setColor('hsl(219, 14%, 63%)')
      setCirle('red')
      console.log('done')
  
      if(color==='hsl(219, 14%, 63%)'){
      setCounter(counter-1)
      setColor('')
      setCirle('')
      }else{
        setCounter(counter+1)
        setColor('hsl(219, 14%, 63%)')
      setCirle('red')
        
      }
    }
  return (
    <toogleContext.Provider value={{setColor,setCounter,setCirle,color,circle,Add}}>
       {children}
    </toogleContext.Provider>
  )
}

export default ProviderCard
