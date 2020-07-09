import React from 'react';
import './testimonial.scss';

import Title from '../../layout/title/title'
import Description from '../../layout/description/description';


function Testimonial() {
  return (
    <div>
      <Title slogan="¡Amamos a nuestros huéspedes!" title="Your testimonials"/>
      <Description 
        desc="My family went June 1, 2017 to celebrate my husband's birthday along with our 4 young children. Our table was ready upon arrival. The server was exceptional. She was quick to respond to our requests and was so patient and friendly to our kids. This place served the best churrasco we have ever had! Everything we ordered was amazing! Highly recommend this place."
      />

      

    </div>
  );
}

export default Testimonial;
