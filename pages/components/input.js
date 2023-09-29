export default function Input({value,onChange,placeholder,name,style}) {
    return(
        <input 
        type="text" 
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={style}
        />
    )
}