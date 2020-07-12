import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class NavItem extends Component {
  render() {
    let { itemName, url } = this.props;
    return (
      <li className="navigation__item">
        <Link className="menu__link" to={url} >
        {itemName}
        </Link>
      </li>
    );
  }
}