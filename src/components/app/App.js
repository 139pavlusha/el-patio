import React from 'react';
import './App.scss';


import Navigation from '../navigation/navigation';

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

    </div>
  );
}

export default App;
