import React, { Component } from 'react';
import './show-dishes.scss'

import dishes from '../../../Home/popular-dishes/dish/menu-servise';

export default class ShowDishes extends Component {

    showDishes = () => {
        const { menu, filter } = this.props;
        let arr = [];

        for (let i = 0; i < dishes.length; i++) {
            let dish = dishes[i];
            if (dish.dishFor === menu)
                arr.push(
                    <p>{dish.dishName}</p>
                );
        }

        return arr;
    }

    render() {

        const { menu, filter } = this.props;
        console.log(menu, filter)

        return (
            <div className="show-dishes__container">
                <ul className="show-dishes__list">
                    {this.showDishes()}
                </ul>
            </div>
        );
    }
}
