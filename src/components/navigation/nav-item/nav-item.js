import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class NavItem extends Component {
  render() {
    let { itemName, url } = this.props;
    return (
      <li className="navigation__item">
        <NavLink  activeStyle={{ color: '#F8AB11' }} to={url} >
        {itemName}
        </NavLink>
      </li>
    );
  }
}