import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";

import Home from "../Home";
import Menu from "../Menu";
import Catering from "../Catering";
import Bakery from "../Bakery";
import Contact from "../Contact";
import ScrollToTop from "./ScrollToTop"

function App() {
  return (
    <Router>
      <div className="app">
      <ScrollToTop />
        <Navigation />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/main" render={() => <Home />} />
        <Route path="/menu" render={() => <Menu />} />
        <Route path="/bakery" render={() => <Bakery />} />
        <Route path="/catering" render={() => <Catering />} />
        {/* <Route path="/market" render={() => <Markets />} /> */}
        <Route path="/contact" render={() => <Contact />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;


