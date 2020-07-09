import React from 'react';
import './navigation.scss';

function Navigation() {
  return (
    <div class="navigation">
      <ul class="navigation__list">
        <li class="navigation__item"><a href="#">restaurant</a></li>
        <li class="navigation__item"><a href="#">Menu</a></li>
        <li class="navigation__item"><a href="#">bakery</a></li>
        <li class="navigation__item"><a href="#">Catering</a></li>
        <li class="navigation__item"><a href="#">market&wines</a></li>
        <li class="navigation__item"><a href="#">contact</a></li>
      </ul>
    </div>
  );
}

export default Navigation;
