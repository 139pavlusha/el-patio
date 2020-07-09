import React from 'react';
import './unique-combination.scss';

import Title from '../../layout/title/title'
import Stars from '../../layout/stars/stars'
import Description from '../../layout/description/description'

function UniqueCombination() {
  return (
    <div>
      <Title slogan="Disfruta de la" title="Unique combination"/>
      <Stars />
      <Description 
        desc="We are a unique combination of Restaurant and Bakery with a large number of packaged goods from Argentina and the greatest variety of Argentinean wines in the metropolitan area. Come and enjoy breakfast with fresh pastries (facturas) and a variety of coffees. Or enjoy our discounted lunch menu Monday through Friday, or our full service dinner with an extended menu and specials. "
      />
      <Description 
        desc="Our specialties include empanadas and quiches with several vegetarian options, sausages (chorizos), chimichurri sauce, milanesas and traditional Argentinean barbecue (parrillada)."
      />
      

    </div>
  );
}

export default UniqueCombination;
