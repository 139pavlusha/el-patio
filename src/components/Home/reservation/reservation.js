import React from 'react';
import './reservation.scss';

import Title from '../../layout/title/title'
import Button from '../../layout/button/button'
import Stars from '../../layout/stars/stars'

function Reservation() {
  return (
    <div>
      <Title slogan="Reserva" title="Book a table"/>
      <Stars />
      <Button />

    </div>
  );
}

export default Reservation;
