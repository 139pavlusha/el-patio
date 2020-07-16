import React, { Component } from 'react';
import DishesNav from './dishes-nav/dishes-nav';
import DishesList from './dishes-list/dishes-list';
import ShowDishes from './show-dishes/show-dishes';

import './menu-content.scss';
import MenuNav from '../menu-nav/menu-nav';

export default class MenuContent extends Component {

  state = {
    classNameLunch: 'menu-underscore',
    classNameDinner: '',
    classNameWine: '',

    classNameSandwich: 'menu-choose',
    classNameBreakfest: '',
    classNameMain: '',
    classNameAppet: '',
    classNameDessert: '',
    classNameGrill: '',

    menu: 'Lunch',
    filter: 'Sandwiches'
  }

  clickLunch = () => {
    this.clearFilter();
    this.setState({ classNameLunch: 'menu-underscore', classNameDinner: '', classNameWine: '', menu: 'Lunch' });
  }
  clickDinner = () => {
    this.clearFilter();
    this.setState({ classNameLunch: '', classNameDinner: 'menu-underscore', classNameWine: '', menu: 'Dinner' });
  }
  clickWine = () => {
    this.clearFilter();
    this.setState({ classNameLunch: '', classNameDinner: '', classNameWine: 'menu-underscore', menu: 'Wine' });
  }

  clearFilter = () => {
    this.setState({
      classNameSandwich: '',
      classNameBreakfest: '',
      classNameMain: '',
      classNameAppet: '',
      classNameDessert: '',
      classNameGrill: '',
      filter: ''
    });
  }
  clickSandwich = () => {
    this.clearFilter();
    this.setState({ classNameSandwich: 'menu-choose', filter: 'Sandwiches' });
  }
  clickBreakfest = () => {
    this.clearFilter();
    this.setState({ classNameBreakfest: 'menu-choose', filter: 'Breakfasts' });
  }
  clickMain = () => {
    this.clearFilter();
    this.setState({ classNameMain: 'menu-choose', filter: 'Main Courses' });
  }
  clickAppet = () => {
    this.clearFilter();
    this.setState({ classNameAppet: 'menu-choose', filter: 'Appetizers' });
  }
  clickDessert = () => {
    this.clearFilter();
    this.setState({ classNameDessert: 'menu-choose', filter: 'Drinks' });
  }
  clickGrill = () => {
    this.clearFilter();
    this.setState({ classNameGrill: 'menu-choose', filter: 'Grill' });
  }


  render() {

    return (
      <div className="menu-content">

        <div className="menu-nav">
          <ul className="menu-nav__list">
            <li onClick={this.clickLunch} className={'menu-nav__item ' + this.state.classNameLunch}>Lunch</li>
            <span className="menu-nav__slash">/</span>
            <li onClick={this.clickDinner} className={'menu-nav__item ' + this.state.classNameDinner}>Dinner</li>
            <span className="menu-nav__slash">/</span>
            <li onClick={this.clickWine} className={'menu-nav__item ' + this.state.classNameWine}>Wine List</li>
          </ul>
        </div>

        <div className="menu-container" >
          <div className="menu-container__filter">
            <ul className="menu-container__list">
              <li onClick={this.clickSandwich} className={'menu-container__item ' + this.state.classNameSandwich}>
                <span className="menu-container__text">Sandwiches</span>
                <div className="menu-container__circle --sandwich"></div>
              </li>
              <li onClick={this.clickBreakfest} className={'menu-container__item ' + this.state.classNameBreakfest}>
                <span className="menu-container__text">Breakfest</span>
                <div className="menu-container__circle --breakfest"></div>
              </li>
              <li onClick={this.clickMain} className={'menu-container__item ' + this.state.classNameMain}>
                <span className="menu-container__text">Main courses</span>
                <div className="menu-container__circle --main"></div>
              </li>
              <li onClick={this.clickAppet} className={'menu-container__item ' + this.state.classNameAppet}>
                <span className="menu-container__text">Appetizers</span>
                <div className="menu-container__circle --appet"></div>
              </li>
              <li onClick={this.clickDessert} className={'menu-container__item ' + this.state.classNameDessert}>
                <span className="menu-container__text">Desserts&drinks</span>
                <div className="menu-container__circle --dessert"></div>
              </li>
              <li onClick={this.clickGrill} className={'menu-container__item ' + this.state.classNameGrill}>
                <span className="menu-container__text">Grill</span>
                <div className="menu-container__circle --grill"></div>
              </li>
              <div className="menu-container__horizontal-line"></div>
            </ul>
          </div>

          <ShowDishes menu={this.state.menu} filter={this.state.filter} />
        </div>

        {/* <DishesNav /> */}
        {/* <DishesList /> */}

      </div>
    );
  }
}
