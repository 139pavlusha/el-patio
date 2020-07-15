import React from 'react';
import './dish.scss';



// const dishStyle = {
// 	backgroundImage: 'url('images/Component1.png')'
// }


const Dish = ({ title, desc, price }) => {


	return (

		<div className="col-3 dish ">
			<div className="dish__info">
				<h3 className="dish__title">{title}</h3>
				<p className="dish__desc">{desc}</p>
				<p className="dish__price"><span>Price: </span>${price}</p>
			</div>
		</div>
	);
}

export default Dish;
