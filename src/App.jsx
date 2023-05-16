import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DropzoneComponent from './components/Dropzone';
import NavbarComponent from './components/Navbar';
import Filelist from './components/Filelist';
import FooterComponent from './components/Footer';
import './App.css'
import useHelloWorld from "./hooks/useHelloWorld";

function App() {
  // const [count, setCount] = useState(0)
  const [data] = useHelloWorld(import.meta.env.VITE_API_URL);

  if(data){
    console.log(data);
    return (
    
      <div className='h-screen'>
        <NavbarComponent />
       
       {/* Header */}
    
    
   
   <div><h3 className='text-lg antialiased	italic flex justify-center m-3'>Currently we only support zip as this in Alpha</h3></div>
   
   <DropzoneComponent />
  
  {localStorage.getItem('items') &&  <Filelist  />}
  
  
   
   {/* <FooterComponent /> */}
   
   
   <div>
     
   </div>
   </div>
     )
  }

}

export default App
