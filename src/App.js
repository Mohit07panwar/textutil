import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/navbar.components.jsx";
import TextForm from "./components/textform.jsx";
import Alert from "./components/alert";
// import DarkMode from './components/darkmode.jsx';


function App() {

  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#5e5c5c";
     setShow("success","You have succesfully enabled Dark Mode")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      setShow("success","You have succesfully enabled Light Mode")
     }

  }
  const [alert, setalert] = useState(null);
 
  const setShow= (type,Message)=>{
    setalert({
      msg: Message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    },1500);
  }

  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-4">
        <TextForm setShow={setShow} text="Enter the Text to Analize" />
        {/* <DarkMode /> */}
      </div>
    </div>
  ) 
}

export default App;
