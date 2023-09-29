import { useDes } from "@/pages/context/DescriptionContext";
import QuillEditor from "./quillEditor";
const DescriptionInput = () => {
    const {description,setDescription} = useDes();
    console.log(description);
    return ( 
        <QuillEditor value={description} onChange={setDescription} />
     );
}
 
export default DescriptionInput;