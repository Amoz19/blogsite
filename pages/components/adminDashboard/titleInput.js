import { useTitle,useTitleChange} from "@/pages/context/DescriptionContext";
const TitleInput = () => {
    const {title} = useTitle()
    const {onTitleChange} = useTitleChange()
    console.log(title)
    return ( 
        <input type="text" value={title} onChange={(event) => onTitleChange(event)} placeholder="Title" className="w-full mb-2 bg-transparent text-black focus:outline-none border placeholder:text-xl mr-2" />
     );
}
 
export default TitleInput;