import React from 'react';

import '../index.css';
import '../Style/style.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  
import Login from './Login';
import Home from './Home';

  const App =()=>{
       
    return(
        <div className='container'>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/Login" element={<Login/>}/>

                </Routes>
            </Router>
        </div>
    )
}

export default App;