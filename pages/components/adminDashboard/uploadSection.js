import ImagesButton from "./ImagesButton"
import DocumentsInputs from "./DocumentsInputs"
import { useHandleSubmit } from "@/pages/context/DescriptionContext"
import { useFileInputClear } from "@/pages/context/DOMContext"



 import {
    useImageChange,
    useUploadFile,
 } from '../../context/ImagesContext'

export default function UploadSection(){
   
    const {handleSubmit} = useHandleSubmit()
    const {uploadFile}  = useUploadFile()
    const {onFileInputClear} = useFileInputClear()
   

   
    const onSubmitChange = () => {
        uploadFile()
    }

    const {imageChange} = useImageChange()

    const onImageChange = () => {
        imageChange(event)
   }

   const onHandleClearInput = () => {
    onFileInputClear()
}

   const onHandleSubmit = () => {
    handleSubmit(event)
    onHandleClearInput()
    
    }



    return(
       
        <div className="w-4/5 mx-auto my-5 px-4">
       <div className='my-4'>
           <form onSubmit={event => onHandleSubmit(event)}>
               <DocumentsInputs />
               <ImagesButton onImageChange={onImageChange} onSubmitChange={onSubmitChange} />
           </form>
           
       </div>
   </div>
   
                        
)

  
}
    
