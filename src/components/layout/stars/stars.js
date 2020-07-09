import React from 'react';
import './stars.scss';
import star from '../stars/images/Star.png';


function Stars() {
    
  return (
    <div className="star">
      <img src={star} alt="star" className="star__item" />
      <img src={star} alt="star" className="star__item" />
      <img src={star} alt="star" className="star__item" />
      <img src={star} alt="star" className="star__item" />
      <img src={star} alt="star" className="star__item" />
    </div>
  );
}

export default Stars;
