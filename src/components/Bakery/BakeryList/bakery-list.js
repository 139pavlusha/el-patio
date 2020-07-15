import React from 'react';
import Bake from '../Bake/bake';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './bakery-list.scss';

export default function BakeryList ({baking}) {
  let settings = {
    dots: true,
    infinite: false,
    speed: 0,
    slidesToShow: 6,
    slidesToScroll: 6,
    vertical: true,
    verticalSwiping: false
  };
      const bakeryElements = baking.map(bakery =>
          <li className="bakery__block" key = {bakery.id}><Bake bakery = {bakery}/></li>
        )
      return(
        <ul className="bakery__list container">
            <Slider {...settings}>
            {bakeryElements}
          </Slider>
          </ul>
        );
}