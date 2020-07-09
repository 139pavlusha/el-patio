import React from 'react';
import './App.scss';


import Navigation from '../Home/navigation/navigation';
import Banner from '../Home/banner/banner';
import TrueCuisine from '../Home/true-cuisine/true-cuisine';
import PopularDishes from '../Home/popular-dishes/popular-dishes';
import UniqueCombination from '../Home/unique-combination/unique-combination';
import Reservation from '../Home/reservation/reservation';
import Testimonial from '../Home/testimonial/testimonial';
import Footer from '../Home/footer/footer';








// need to del <hr>
function App() {
  return (
    <div className="App">
      <Navigation />
        <hr></hr>
      <Banner />
        <hr></hr>
      <TrueCuisine />
        <hr></hr>
      <PopularDishes />
      <hr></hr>
      <UniqueCombination />
      <hr></hr>
      <Reservation />
      <hr></hr>
      <Testimonial />
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
