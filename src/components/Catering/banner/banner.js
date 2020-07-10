import React from 'react';
import './banner.scss';

import BigTitle from '../../layout/big-title/big-title'
import Button from '../../layout/button/button'

const CateringBanner = () => {
  return (
    <header className="banner">

      <div className="banner__wrap">
    
        <div className="banner__main">
          <div className="banner__title">
            <BigTitle slogan="El Patio International" title="CATERING"/>
          </div>
          <div className="banner__buttons">
            <div className="banner__button"><Button button="make an order" /></div>
            
            <div className="banner__button"><Button button="discover menu" /></div>
          </div>

        </div>
      </div>
    </header>

  );
}

export default CateringBanner;