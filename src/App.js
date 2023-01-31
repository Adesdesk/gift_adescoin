import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from '../containers/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


const App = () => {
    return (
      <Router>        
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes>        
      </Router>
    );
  }
  
  export default App;