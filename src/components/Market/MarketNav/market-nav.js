import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './market-nav.scss';

export default class MarketNav extends Component {

  render() {
    return (
      <div className="market__navigation">
        <div className="market__button button">
          <NavLink className="button__item" to="/market/wines" >Wine market</NavLink>
        </div>
        <div className="market__button button">
          <NavLink className="button__item" to="/market/food" >Food market</NavLink>
        </div>
      </div>
    );
  }
}
