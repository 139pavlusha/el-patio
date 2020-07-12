import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';

import Home from '../Home';
import Menu from '../Menu';
import Catering from '../Catering';


// need to del <hr>
function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Home />
        <hr></hr>
        <Menu />
        <hr></hr>
        <Catering />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
