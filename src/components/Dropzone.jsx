import React, { useCallback,useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';



function DropzoneComponent() {
  const [status, setStatus] = useState('')
  // var fileupload;
  const [file, setFile] = useState();
  // const [fileName, setFileName] = useState("");

  const [items, setItems] = useState([]);



  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles);
    console.log(acceptedFiles);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    console.log(file[0])
    formData.append('files', file[0])
    console.log(formData);
    const response = await fetch(import.meta.env.VITE_API_URL+'/upload_files', {
      method: 'POST',
      body: formData,
    })
    if (response){
      response.json().then(json => {
        console.log(json.output);
        localStorage.setItem('items',json.output);
        window.location.reload();
        
      });
    } 
  }

  const {
    getRootProps,
    getInputProps
  } = useDropzone({
    onDrop
  });

if(file){
    return (
      <div>
    <div {...getRootProps()}>
        
    <input {...getInputProps()} />
    
    <div className="mt-3 flex items-center justify-center w-full">
     
      <label className="flex flex-col items-center justify-center w-11/12	 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-blue-800 dark:bg-blue-700 hover:bg-blue-100 dark:border-blue-600 dark:hover:border-blue-500 dark:hover:bg-blue-600">
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p>{file[0].name}</p>
      </div>
      <input id="dropzone-file" type="file" className="hidden" />
  </label>
 
</div> 
  </div>
   <div className="mt-3 flex justify-center">
    
   <button className="btn btn-primary" onClick={handleSubmit} >Upload</button>
   </div>

   </div>
  
)
}
  return (
    <div>
    <div {...getRootProps()}>
        
      <input {...getInputProps()} />
      
      <div className="mt-3 flex items-center justify-center w-full">
       
        <label className="flex flex-col items-center justify-center w-11/12	 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-blue-800 dark:bg-blue-700 hover:bg-blue-100 dark:border-blue-600 dark:hover:border-blue-500 dark:hover:bg-blue-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">ZIP (MAX. 2MB)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 
{/* <div className="mt-3 flex justify-center">
 <button className="btn btn-primary">Upload</button>
 
 </div> */}
    </div>
    </div>
  )
}

export default DropzoneComponent;