import React from 'react';

import CateringBanner from '../Catering/banner/banner';
import PorQue from '../Catering/por-que/por-que';
import ChooseEvent from '../Catering/choose-event/choose-event';
import FAQ from '../Catering/faq/faq';
import Form from '../Catering/form/form';

function Catering() {
  return (
    <div className="Home">
      <CateringBanner />
      <ChooseEvent />
      <PorQue />
      <FAQ />
      <Form />
    </div>
  )
}

export default Catering;