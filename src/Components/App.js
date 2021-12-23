import React from 'react';

import '../index.css';
import '../Style/style.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Basic from './Pages/Basic/Basic'
import Plus from './Pages/Plus/Plus'
import Premium from './Pages/Premium/Premium'

  const App =()=>{
       
    return(
        <div className='container'>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Basic" element={<Basic/>}/>
                    <Route path="/Plus" element={<Plus/>}/>
                    <Route path="/Premium" element={<Premium/>}/>

                </Routes>
            </Router>
        </div>
    )
}

export default App;