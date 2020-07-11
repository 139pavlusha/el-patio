import React from 'react';

import Banner from '../Home/banner/banner';
import TrueCuisine from '../Home/true-cuisine/true-cuisine';
import PopularDishes from '../Home/popular-dishes/popular-dishes';
import UniqueCombination from '../Home/unique-combination/unique-combination';
import Reservation from '../Home/reservation/reservation';
import Testimonial from '../Home/testimonial/testimonial';

function Home() {
  return (
    <div className="Home">
      <Banner />
      <TrueCuisine />
      <PopularDishes />
      <UniqueCombination />
      <Reservation />
      <Testimonial />
    </div>
  )
}

export default Home;