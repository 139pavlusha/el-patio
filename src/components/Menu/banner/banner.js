import React from 'react';
import './banner.scss';

import BigTitle from '../../layout/big-title/big-title'
import Button from '../../layout/button/button'

const MenuBanner = () => {
  return (
    <header className="menu-banner">

      <div className="menu-banner__wrap">
    
        <div className="menu-banner__main">
          <div className="menu-banner__title">
            <BigTitle slogan="Delicioso sueño" title="menu"/>
          </div>
          <div className="menu-banner__buttons">
            <div className="menu-banner__button"><Button button="book a table" /></div>
            
            <div className="menu-banner__button"><Button button="make an order" /></div>
          </div>

        </div>
      </div>
    </header>

  );
}

export default MenuBanner;
