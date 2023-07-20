import React, {useState} from 'react'
import './App.css';
import Navbar from './componenets/Navbar'
import About from './componenets/About'
import TextForm from './componenets/TextForm'
import Alert from './componenets/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [modeText, setmodeText] = useState('Enable dark mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toogleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setmodeText('Disable dark mode');
      document.body.style.backgroundColor = 'rgb(1 1 34)';
      showAlert("Dark mode has been enable", "success");
      // document.title = "TextUtils-Dark Mode";
      
    }
    else{
      setMode('light');
      setmodeText('Enable dark mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      // document.title = "TextUtils-Light Mode"
    }
  }
  return (
<>
<Router>
<Navbar title = "TextUtils" mode = {mode} toogleMode = {toogleMode} modeText = {modeText}></Navbar>
<Alert alert={alert}> </Alert>
<div className="container">
  <Routes>
          <Route exact path="/about" element = {<About mode = {mode} />}></Route>
          <Route exact path="/" element = {<TextForm showAlert = {showAlert} heading = "Enter your text here" mode = {mode}></TextForm>}>
          </Route>
  </Routes>
</div>
</Router>
</>
  );
}

export default App;
