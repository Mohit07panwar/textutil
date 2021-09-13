import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/navbar.components.jsx";
import TextForm from "./components/textform.jsx";
import Alert from "./components/alert";
import DarkMode from './components/darkmode.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [green, setGreen] = useState("light");
  const toggleGreen = () => {
    if (green === "light") {
      setGreen("green");
      document.body.style.backgroundColor = "green";
      setShow("success", "You have succesfully enabled Green Mode")
    }
    else {
      setGreen("light");
      document.body.style.backgroundColor = "white";
      setShow("success", "You have succesfully enabled Light Mode")
    }
  }

  const [pink, setPink] = useState("light");
  const togglePink = () => {
    if (pink === "light") {
      setPink("dark");
      document.body.style.backgroundColor = "pink";
      setShow("success", "You have succesfully enabled Pink Mode")
    }
    else {
      setPink("light");
      document.body.style.backgroundColor = "white";
      setShow("success", "You have succesfully enabled Light Mode")
    }
  }



  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#5e5c5c";
      setShow("success", "You have succesfully enabled Dark Mode")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      setShow("success", "You have succesfully enabled Light Mode")
    }

  }
  const [alert, setalert] = useState(null);

  const setShow = (type, Message) => {
    setalert({
      msg: Message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
    <Router>
      <div>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} togglePink={togglePink} toggleGreen={toggleGreen} />
        <Alert alert={alert} />
        <div className="container my-4"><Switch>
          <Route path="/darkmode">
            <DarkMode />
          </Route>
          <Route path="/">
            <TextForm setShow={setShow} text="Enter the Text to Analize" />
          </Route>
        </Switch>

        </div>

      </div>
    </Router>
  )
}

export default App;
