import React, { Component } from 'react';
import DishesNav from './dishes-nav/dishes-nav'
import DishesList from './dishes-list/dishes-list'

import './menu-content.scss'

function MenuContent() {

    return (
      <div className="row menu-content">
        <DishesNav />
        <DishesList />
        {/* <DishesBanner dishes={dishes} /> */}
    
      </div>
    )
  
  
}

export default MenuContent

