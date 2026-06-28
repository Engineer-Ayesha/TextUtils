import './App.css';
import Header from './components/header';
import Home from './components/home';
import Master from './components/master';
import About from './components/about';
import Alert from './components/alert';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from 'react';
function App() {
  const[color,setColor]=useState("white");
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  const blueMode=()=>{
    if(color==="white"){
      setColor("#0b1f3a");
      document.body.style.backgroundColor="#0b1f3a";
      showAlert("Blue mode Enabled","success");
    }else{
      setColor("white");
      document.body.style.backgroundColor="white";
      showAlert("Light mode Enabled","success");
    }
  }
  const greenMode=()=>{
    if(color==="white"){
      setColor("#0f3d2e");
      document.body.style.backgroundColor="#0f3d2e";
      showAlert("Green mode Enabled","success");
    }else{
      setColor("white");
      document.body.style.backgroundColor="white";
      showAlert("Light mode Enabled","success");
    }
  }
  const result=()=>{
    if(color==="white"){
      setColor('black');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode Enabled","success");
    }else{
      setColor('white');
      document.body.style.backgroundColor='white';
      showAlert("Light mode Enabled","success");
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Header toggle={result} bgcolor={color} blueMode={blueMode} greenMode={greenMode} />
      <Alert bgcolor={color} text={alert} />
      <Routes>
        <Route path="/" element={<Master/>}>
            <Route index element={<Home bgcolor={color}  alertFun={showAlert}/>}/>
            <Route path='/about' element={<About bgcolor={color}/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
