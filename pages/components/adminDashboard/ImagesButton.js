// import { useRef } from "react"
import { useDOMContext } from "../../context/DOMContext"
export default function Images ({onImageChange,onSubmitChange}) {
    const {fileInputRef} = useDOMContext()
    return(
        <>
            <div className="flex justify-between mt-2">
                <input type="file" ref={fileInputRef} onChange={onImageChange} />
                <button onClick={onSubmitChange} className="text-white bg-blue-600 px-5 py-0.5 rounded-md">Post</button> 
            </div>
           
        </>
    )
}