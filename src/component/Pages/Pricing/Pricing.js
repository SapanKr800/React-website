import React, { Component } from 'react';
import './Pricing.css';
import { Monthly } from './Monthly';
import { Yearly } from './Yearly';


export class Pricing extends Component {


  render() {
    return (
      <div>
  
      Pricing Pages
    <Monthly/>
    <Yearly/>

      </div>
    );
  }
}

