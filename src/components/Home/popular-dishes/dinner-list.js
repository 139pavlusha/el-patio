import React from 'react';
import Dish from './dish/dish';

export default function DinnerList ({dishes}) {

      // const dishesElements = dishes.map(dishes =>
      //     <Dish key = {dishes.id} dishes = {dishes}/>
      //   )

      const dishesElements = dishes.filter(dish => {if (dish.popularDishes === true) return dish})
      .filter(el => {if (el.dishFor.toLocaleLowerCase() === "dinner"){return el}})
      .map(dishes => 
      <Dish key={dishes.id} dishes={dishes} />)

      return(
        <ul className="dishes__list row">
            {dishesElements}
        </ul>
        );
}
