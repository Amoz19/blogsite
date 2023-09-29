const { createContext, useRef, useContext } = require("react");

const DOMContext = createContext({
    fileInputRef : null,
    onFileInputClear : () => {

    }
})

export const useDOM = () => {
    const context = useContext(DOMContext)
    if (!context){
        throw new Error("Empty Context")
    }
    return context
}

export const useDOMContext = () => {
    const {fileInputRef} = useDOM()
    return{
        fileInputRef
    }
}

export const useFileInputClear = () => {
    const {onFileInputClear} = useDOM()
    return{
        onFileInputClear
    }
}

export const DOMContextProvider = ({children}) => {
    const fileInputRef = useRef(null)
    const onFileInputClear = () => {
        fileInputRef.current.value = null;
        
    }


    const value = {
        fileInputRef,
        onFileInputClear
    }
    return <DOMContext.Provider value={value}>{children}</DOMContext.Provider>
}

export default function DOMContextComponent(){
    return(
            <p>DOM Context</p>
    )
}