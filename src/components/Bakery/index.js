import React from 'react';
import './bakery.scss';
import styled from 'styled-components';
import {SlideWrapper} from './style';

import BakeryList from './BakeryList/bakery-list';
import baking from './baking';

import Title from '../layout/title/title';


function Bakery() {
  return (
    <div className="bakery">
      <div className="bakery__title"><Title slogan="el Patio" title="bakery store" /></div>
          <SlideWrapper>
            <BakeryList baking={baking} />
          </SlideWrapper>
        <span className="bakery__bg--1"></span>
        <span className="bakery__bg--2"></span>
        <span className="bakery__bg--3"></span>
        <span className="bakery__bg--4"></span>
        <span className="bakery__bg--5"></span>
        <span className="bakery__bg--6"></span>
    </div>
  )
}

export default Bakery;