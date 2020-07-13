import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";

import Home from "../Home";
import Menu from "../Menu";
import Catering from "../Catering";
import Bakery from "../Bakery";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/main" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/bakery" component={Bakery} />
        <Route path="/catering" component={Catering} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
