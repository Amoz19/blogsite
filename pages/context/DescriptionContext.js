import {createContext, useContext, useEffect, useState} from "react";

const DescriptionContext = createContext({
    title:"",
    description:"",
    setDescription: () => {

    },
    onTitleChange: () => {

    },
    handleSubmit : () => {

    }
})

const useDescription = () => {
    const context = useContext(DescriptionContext)
    if(!context){
        throw new Error("Context doesn't exist")
    }
    return context
}


export  const useTitle = () => {
    const {title} = useDescription()
    return{
        title
        
    }
}

export  const useDes = () => {
    const {description,setDescription} = useDescription()
    return{
        description,
        setDescription
    }
       
    
        
}

export const useTitleChange = () => {
    const {onTitleChange} = useDescription()
    return{
        onTitleChange
    }
}


export const useUploadDoc = () => {
    const {uploadDoc} = useDescription()
    return{
        uploadDoc
    }
}

export const useHandleSubmit = () => {
    const {handleSubmit} = useDescription()
    return {
        handleSubmit
    }
}



export const DescriptionProvider = ({children}) => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");



    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setTitle("");
        setDescription("");
    }
    

  
    const value = {
        title,
        description,
        setDescription,
        onTitleChange,
        handleSubmit,
        }
    return(
        <DescriptionContext.Provider value={value}>{children}</DescriptionContext.Provider>
    )
}

const DescriptionContextCom = () => {
    // Your DataContext component logic here
    return <div>DescriptionContext Component</div>;
  };
  
  export default DescriptionContextCom;