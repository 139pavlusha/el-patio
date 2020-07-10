import React, { Component } from 'react';
import './testimonial.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import avatar from './images/customers photo.png'

import Title from '../../layout/title/title';
import Button from '../../layout/button/button';
import Stars from '../../layout/stars/stars';
import Description from '../../layout/description/description';

export default class App extends Component {

  state = {
    classNameForm: 'display-none',
    classNameShowForm: 'showFormButton',

    testimonials: JSON.parse(localStorage.getItem('testimonialsLS')) || [],
    FieldsNotComplete: false,

    labelName: '',
    labelText: '',
    labelNumber: ''
  }

  onNameChange = (e) => {
    this.setState({ labelName: e.target.value });
  }

  onTextChange = (e) => {
    this.setState({ labelText: e.target.value });
  }

  onStarsChange = (e) => {
    this.setState({ labelNumber: e.target.value });
  }

  showForm = () => {
    this.setState({ classNameForm: 'testimonial__form', classNameShowForm: 'display-none' });
  }

  WARfieldsNotComplete = () => {
    if (this.state.FieldsNotComplete) {
      return (<span className="warning">Please complete all fields or check if they are correct</span>);
    }
    else {
      return null;
    }
  }

  sendForm = () => {
    const { labelName, labelNumber, labelText, testimonials } = this.state;
    if (labelName && labelNumber && labelText) {
      this.setState({ FieldsNotComplete: false });

      if (+labelNumber < 1 || +labelNumber > 5) {
        this.setState({ FieldsNotComplete: true });
      }
      else {
        this.setState({
          classNameForm: 'display-none',
          classNameShowForm: 'showFormButton',
          labelName: '',
          labelText: '',
          labelNumber: ''
        });
      }
    }
    else {
      this.setState({ FieldsNotComplete: true });
    }
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className: "slides"
    }

    return (
      <section class="testimonials" id="testimonials">
        <Title slogan="¡Amamos a nuestros huéspedes!" title="Your testimonials" />

        <div className="content">
          <Slider {...settings}>

            <div class="review">
              <div class="review__item">
                <img src={avatar} alt="avatar" class="review__avatar" />
                <div class="review__info">
                  <h5 class="review__name">Tania Perez-Fuentes </h5>
                  <div class="review__stars">
                    <Stars />
                  </div>
                </div>
              </div>
              <p class="review__text">My family went June 1, 2017 to celebrate my husband's birthday along with our 4
              young children. Our table was ready upon arrival. The server was exceptional. She was quick to respond
              to our requests and was so patient and friendly to our kids. This place served the best churrasco we
              have ever had! Everything we ordered was amazing! Highly recommend this place.</p>
            </div>

            <div class="review">
              <div class="review__item">
                <img src={avatar} alt="avatar" class="review__avatar" />
                <div class="review__info">
                  <h5 class="review__name">Tania Perez-Fuentes </h5>
                  <div class="review__stars">
                    <Stars />
                  </div>
                </div>
              </div>
              <p class="review__text">My family went June 1, 2017 to celebrate my husband's birthday along with our 4
              young children. Our table was ready upon arrival. The server was exceptional. She was quick to respond
              to our requests and was so patient and friendly to our kids. This place served the best churrasco we
              have ever had! Everything we ordered was amazing! Highly recommend this place.</p>
            </div>
          </Slider>
        </div>

        <div className={this.state.classNameForm}>
          <input onChange={this.onNameChange} placeholder="Full name" type="text" className="testimonial__item" value={this.state.labelName} />
          <textarea onChange={this.onTextChange} placeholder="Your testimonial" className="testimonial__item testimonial__item--big" value={this.state.labelText} />
          <input onChange={this.onStarsChange} placeholder="Enter number of stars" type="number" className="testimonial__item testimonial__item--stars" value={this.state.labelNumber} min="1" max="5" />
          <div onClick={this.sendForm} className="testimonial__button">
            <Button button="Send" />
          </div>
          {this.WARfieldsNotComplete()}
        </div>

        <div onClick={this.showForm} className={this.state.classNameShowForm}>
          <Button button="Leave a testimonial" />
        </div>
      </section>
    );
  };
}
