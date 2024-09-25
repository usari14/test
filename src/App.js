
import './App.css';
// import About from './Components/About';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (msg, type) => {
    setalert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("success", "Dark Mode Enabled")
    }else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode Enabled")
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar titleNav="TEXT-Utils" aboutUsText="About-our-Site" home="HOME" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          {/* <Routes> */}
            {/* Use element prop to render components */}
            {/* <Route exact path="/" element={ */}
              <TextForm showAlert={showAlert} headingTextArea="Add Data To Analyze" mode={mode} />
              {/* } /> */}
            {/* <Route exact path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
