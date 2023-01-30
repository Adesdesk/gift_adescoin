import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from '../containers/Layout';
import Home from './pages/Home';
import Users from './pages/Users';


const App = () => {
    return (
      <Router>        
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/users" element={<Users/>}/>
          </Routes>        
      </Router>
    );
  }
  
  export default App;