import React from 'react';
import './banner.scss';

import BigTitle from '../../layout/big-title/big-title'
import Button from '../../layout/button/button'

const CateringBanner = () => {
  return (
    <header className="catering-banner">

      <div className="catering-banner__wrap">
    
        <div className="catering-banner__main">
          <div className="banner__title">
            <BigTitle slogan="El Patio International" title="CATERING"/>
          </div>
          <div className="catering-banner__buttons">
            <div className="catering-banner__button"><Button button="make an order" /></div>
            
            <div className="catering-banner__button"><Button button="discover menu" /></div>
          </div>

        </div>
      </div>
    </header>

  );
}

export default CateringBanner;