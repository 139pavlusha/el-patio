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

import CateringBanner from '../Catering/banner/banner';
import PorQue from '../Catering/por-que/por-que';
import ChooseEvent from '../Catering/choose-event/choose-event';



// import MenuBanner from '../Menu/banner/banner';








// need to del <hr>
function App() {
  return (
    <div className="App">
      <Navigation />
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
      <hr></hr>
      <CateringBanner />
      <ChooseEvent />
      <PorQue />
      <hr></hr>
      {/* <MenuBanner /> */}
    </div>
  );
}

export default App;
