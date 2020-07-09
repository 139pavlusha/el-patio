import React from 'react';
import './popular-dishes.scss';

import Title from '../../layout/title/title'
import Button from '../../layout/button/button'
import Stars from '../../layout/stars/stars'
import Dish from './dish/dish'

function PopularDishes() {
  return (
    <div>
      <Title slogan="Prueba nuestros" title="popular dishes"/>
      <Stars />
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      <Button button="open the full menu" />    

    </div>
  );
}

export default PopularDishes;
