import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alerts from './components/Alerts';
import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [Alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message
      ,type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },4000)
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has  been enabled","success")
      document.title='App-Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success")
      document.title='App-Light Mode'
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alerts alert={Alert}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
    {/* <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/"> */}
          {/* </Route>
        </Switch> */}
    <About/>
    </div>
    {/* </Router> */}
    </> 
  );
}

export default App;