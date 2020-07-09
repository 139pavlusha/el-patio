import React from 'react';
import './reservation.scss';

import Title from '../../layout/title/title'
import Button from '../../layout/button/button'
import Stars from '../../layout/stars/stars'
import Description from '../../layout/description/description';


function Reservation() {
  return (
    <div>
      <Title slogan="Reserva" title="Book a table"/>
      <Stars />
      <Description 
        desc="We provide ample parking and conveniently located on Loehmann's Plaza. the closest metro station is Twinbrook. We also provide catering services, corporate lunches and barbecues"
      />
      <Button />

    </div>
  );
}

export default Reservation;
