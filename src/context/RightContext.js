import React,{useState,createContext} from 'react'

export const RightContext = createContext()

function RightContextProvider(props) {
    const [isInput, setIsInput] = useState(true);
    const [rightIsHidden,setRightIsHidden] = useState(true)
    const [bottomIsHidden,setBottomIsHidden] = useState(true)

    return(
        <RightContext.Provider value={{isInput,setIsInput,rightIsHidden,setRightIsHidden,bottomIsHidden,setBottomIsHidden}}>
           {props.children}
        </RightContext.Provider>
    )
}
export default RightContextProvider