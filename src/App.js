import logo from './logo.svg';
import './App.css';
import Tracker from './Components/Tracking/Tracker';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';

import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tracker" element={<Tracker/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
