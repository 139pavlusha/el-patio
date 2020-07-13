import React, { Component } from 'react';
import './bake.scss';

// let imgs = [
//   '../images/bakery1.png',
//   '../images/bakery2.png',
//   '../images/bakery3.png',
//   '../images/bakery4.png',
//   '../images/bakery5.png',
//   '../images/bakery6.png'
// ]

class Bake extends Component {
  render() {
    const {bakery} = this.props
  return(
      <div className="bake row">
        <div className="bake__img col-6">
          <img src={require(`../images/bakery${bakery.id}.png`)} />
        </div>
        <div className="bake__info col-6">
          <h2 className="bake__title">{ bakery.title }</h2> 
          <div className="bake__descr">{ bakery.descr }</div>
        </div>
      </div>
    );
  }
}

export default Bake;