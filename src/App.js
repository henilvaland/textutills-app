import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';


function App() {
  const[mode, setMode] = useState('light');
  //const [alert, setAlert] = useState(null);

  /*const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
  }*/

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
 
  return (
  <>
  
    <Navbar title = "Analyzeffy" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
         <TextForm heading = "Enter the Text to Analyze Below" mode={mode}/>  
    </div>
  
   
  </>
  );
}

export default App;
