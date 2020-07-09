import React from 'react';
import './banner.scss';

import Title from '../../layout/title/title'
import Button from '../../layout/button/button'

const Banner = () => {
  return (
    <header className="banner">

      <div className="banner__wrap">
    
        <div className="banner__main">
          <div className="banner__title">
            <Title slogan="Bienvenido a" title="El Patio International"/>
          </div>
          <div className="banner__buttons">
            <div className="banner__button"><Button button="book a table" /></div>
            
            <div className="banner__button"><Button button="discover menu" /></div>
          </div>

        </div>
      </div>
    </header>

  );
}

export default Banner;
