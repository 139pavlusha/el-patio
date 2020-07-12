import React, { Component } from "react";
import NavItem from "./nav-item/nav-item";
import './navigation.scss';

export default class Navigation extends Component {
  
    menu = [
      { name: "restaurant", url: "/main", id: 1 },
      { name: "menu", url: "/menu", id: 2 },
      { name: "bakery", url: "/bakery", id: 3 },
      { name: "catering", url: "/catering", id: 4 },
      { name: "market&wines", url: "/market", id: 5 },
      { name: "contact", url: "/contacts", id: 6 },
    ];
    render() {
  return (
       <div className="navigation">
          <ul className="navigation__list">
            {this.menu.map((item) => {
              return (
                <NavItem itemName={item.name} url={item.url} key={item.id} />
              );
            })}
          </ul>
        </div>
      );
    }
  }
    
  
  
  
  
  // <div className="navigation">
  //   <ul className="navigation__list">
  //     <li className="navigation__item"><a href="#">restaurant</a></li>
  //     <li className="navigation__item"><a href="#">Menu</a></li>
  //     <li className="navigation__item"><a href="#">bakery</a></li>
  //     <li className="navigation__item"><a href="#">Catering</a></li>
  //     <li className="navigation__item"><a href="#">market&wines</a></li>
  //     <li className="navigation__item"><a href="#">contact</a></li>
  //   </ul>
  // </div>