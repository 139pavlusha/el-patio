import React from 'react';
import './App.scss';
import '../../fonts/Awesome/font-styles/all.min.css';


import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';

import Home from '../Home';
import Menu from '../Menu';
import Catering from '../Catering';


// need to del <hr>
function App() {
  return (
    <div className="app">
      <Navigation />
      <Home />
      <hr></hr>
      <Menu />
      <hr></hr>
      <Catering />
      <Footer />
    </div>
  );
}

export default App;
