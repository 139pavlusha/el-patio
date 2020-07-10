import React from 'react';
import './choose-event.scss';

import Title from '../../layout/title/title';

import Event from './event'

const ChooseEvent = () => {
  return (
    <div className="choose-event">
      <div className="choose-event__title">
          <Title slogan="Choose your event" title="complete your order in 5 steps"/>
      </div>

      <ul className="choose-event__list">
          <a href="#"><li className="choose-event__item choose-event__item--corp"><Event title="corporate event" /></li></a>
          <a href="#"><li className="choose-event__item choose-event__item--bbq"><Event title="bbq in your house" /></li></a>
          <a href="#"><li className="choose-event__item choose-event__item--wed"><Event title="wedding" /></li></a>
          <a href="#"><li className="choose-event__item choose-event__item--birthday"><Event title="birthday" /></li></a>
          <a href="#"><li className="choose-event__item choose-event__item--party"><Event title="party" /></li></a>
          <a href="#"><li className="choose-event__item choose-event__item--other"><Event title="other" /></li></a>
      </ul>

      <div className="choose-event__progress"></div>
    </div>
  )
}

export default ChooseEvent;