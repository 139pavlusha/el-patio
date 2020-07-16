import React from 'react';
import './popular-dishes.scss';

import Title from '../../layout/title/title'
import Button from '../../layout/button/button'
import Stars from '../../layout/stars/stars'
import Dish from './dish/dish'

function PopularDishes() {
  return (
    <div> 
      <section className="popular-dishes" id="popular-dishes">
        <div>
          <Title slogan="Prueba nuestros" title="popular dishes"/>
          <Stars />
        </div>
        <div className="popular-dishes__menu">
          <div className="fork"></div>
          <div className="knife"></div>
          <ul className="menu-type__list">
            <li className="menu-type__item"><a href="#">Lunch Menu</a></li><span>/</span>
            <li className="menu-type__item"><a href="#">Dinner Menu</a></li>
          </ul>

          <div className="row">
            <Dish title="Triples Surtidos"
                  desc="Sandwich with assorted fillings"  
                  price="4.60" />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
          </div>

        </div>
        <div className="popular-dishes__button"><Button button="open the full menu" /> </div>
      </section>
    </div>  
  );
}

export default PopularDishes;
