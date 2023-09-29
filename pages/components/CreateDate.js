import {useState, useEffect} from 'react'
import DateComponent from './DateComponent';
// import DateComponent from './DateComponent';

export default function CreateDate({createdTime,format}){
    const [createdAt, setCreatedAt] = useState(null);
    useEffect(() => {
        const createdAtDate = new Date(createdTime.seconds * 1000);
        let formattedCreatedAt = '';
        if (format === 'md') {
          formattedCreatedAt = createdAtDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
          });
        } else if (format === 'mdy') {
          formattedCreatedAt = createdAtDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          });
        }
        setCreatedAt(formattedCreatedAt);
      }, [createdTime,format]);
    return(
       <DateComponent createdAt={createdAt} format={format}/>
    )
}