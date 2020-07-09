import React from 'react';
import './true-cuisine.scss';

import Title from '../../layout/title/title'
import Stars from '../../layout/stars/stars'
import Description from '../../layout/description/description';


function TrueCuisine() {
  return (
    <div>
      <Title slogan="Descubre la" title="true argentine cuisine"/>
      <Stars />
      <Description 
        desc="El Patio Argentine Restaurant was opened in Rockville in 2001. We are a family owned restaurant that serves traditional home-style meals from Argentina in a casual dining atmosphere. With authentic recipes from our country El Patio is like a little piece of Argentina in Rockville."
      />
      

    </div>
  );
}

export default TrueCuisine;
