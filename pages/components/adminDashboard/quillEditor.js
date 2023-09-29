
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
// import { useDes } from "@/pages/context/DescriptionContext";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const QuillEditor = ({value,onChange}) => {
  // const {description,setDescription} = useDes();
  // console.log(description)
 

   
    

    return (
      <div>
        <ReactQuill
        value={value}
        onChange={onChange}
        />
      </div>
    );
  };
  
  export default QuillEditor;