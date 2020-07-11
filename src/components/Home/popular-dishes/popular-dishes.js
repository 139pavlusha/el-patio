import React from 'react';
import './popular-dishes.scss';

import Title from '../../layout/title/title'
import Button from '../../layout/button/button'
import Stars from '../../layout/stars/stars'
import Dish from './dish/dish'

function PopularDishes() {
  return (
    <div> 
      <section className="popular-dishes">
        <div>
          <Title slogan="Prueba nuestros" title="popular dishes"/>
          <Stars />
        </div>
        <div className="row popular-dishes__menu">
          <div className="fork"></div>
          <div className="knife"></div>
        <ul className="col-12 menu-type__list">
          <li className="menu-type__item"><a href="#">Lunch Menu</a></li><span>/</span>
          <li className="menu-type__item"><a href="#">Dinner Menu</a></li>
      </ul>

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
        <Button button="open the full menu" />  
      </section>
    </div>  
  );
}

export default PopularDishes;
