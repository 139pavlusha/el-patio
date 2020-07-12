import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';

import Home from '../Home';
import Menu from '../Menu';
import Catering from '../Catering';

import Bakery from '../Bakery';


// need to del <hr>
function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <hr></hr>
        <Home />
        <hr></hr>
        <Menu />
        <hr></hr>
        <Catering />
        <hr></hr>
        <Bakery />
        <hr></hr>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
