import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DropzoneComponent from './components/Dropzone';
import NavbarComponent from './components/Navbar';
import Filelist from './components/Filelist';
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    
    <div>
      <NavbarComponent />
     
     {/* Header */}
   
 
 <div><h3 className='text-lg antialiased	italic flex justify-center m-3'>Currently we only support zip as this in Alpha</h3></div>
 
 <DropzoneComponent />

{localStorage.getItem('items') &&  <Filelist  />}


 
 
 
 
 <div>
   
 </div>
 </div>
   )
}

export default App
