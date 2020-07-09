import React from 'react';
import './navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item"><a href="#">restaurant</a></li>
        <li className="navigation__item"><a href="#">Menu</a></li>
        <li className="navigation__item"><a href="#">bakery</a></li>
        <li className="navigation__item"><a href="#">Catering</a></li>
        <li className="navigation__item"><a href="#">market&wines</a></li>
        <li className="navigation__item"><a href="#">contact</a></li>
      </ul>
    </div>
  );
}

export default Navigation;
