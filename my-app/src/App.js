  
import './App.css';
import React , {useState} from 'react'
import Navbar from './componet/Navbar';
import Aboutus from './componet/Aboutus';

import Textfi from './componet/Textfi';
import Alert from './componet/Alert';
 

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('dark');

  const [alert, setalert] = useState(null);


  document.body.className = mode;


 let showalert =(msg, type)=>{
setalert({
  msg: msg,

  type:type
})
  }



  let toglemode = ()=>{

     if(mode==='light'){
      setmode('dark')

      showalert("dark mode lag gya","success")
     }
     else{
      
      setmode('light')
      showalert("light mode lag gya","success")
    }

 }
 
  
  return (
    <div>
     <Router>
    <Navbar title="hello" mode={mode} toglemode={toglemode} />
    
    <Alert alert={alert}/>

    <div className="container col-6">
    
    <Routes>
    <Route path="/aboutus" element={<Aboutus />} />
    <Route path="/" element={<Textfi showalert={showalert} heading="hello bhai log khushamdeed"/>} />
    
    
        </Routes>


      </div>


      </Router>
</div>
    
  );
}


export default App;
