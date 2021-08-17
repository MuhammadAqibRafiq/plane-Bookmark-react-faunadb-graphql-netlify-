import React,{useState} from 'react'

function FORM({loadLinks}) {

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const resetForm= ()=>{
        setTitle('');
        setUrl('')
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {  title, url  };
        if(!title){console.log("type title")}
        else if(!url){console.log("type url")}
        else{
        try {
            const res = await fetch('/.netlify/functions/createLink', {
                method: 'POST',
                body: JSON.stringify(body),
            });
            resetForm();
            loadLinks();
        } catch (error) {console.error(error);}
    }};
   

    return (
        <div>
           <input value={ title} onChange={(e)=> setTitle(e.target.value)} /> 
           <input value={url} onChange={(e)=> setUrl(e.target.value)} /> 

            <button onClick={handleSubmit}>add</button>
        </div>
    )
}

export default FORM;

