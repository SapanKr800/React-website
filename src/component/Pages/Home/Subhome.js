import React, { Component } from 'react';
import './subhome.css';
import {Business} from './Business'
import { Slideno } from './Slideno';

export class Subhome extends Component {


  render() {
    return (
    <div>
        <div className="image">
        <div className="image-contain">
    <div className="image-text">
        <h1>Find your next product here.</h1>
        <h4>It has never been easier.</h4>
    </div>
    <div className="search-product">

        <div className="product-search">
            <input type="text" className="text-input" placeholder="Search something you want"/>
         </div>

        <div className="product-pick">
        <select className="selectpicker">
            <option>Furniture </option>
            <option>Appliances</option>
            <option>Stationary</option>
         </select>
         <input type="button" value="Search" className="btn"/>
         </div>

    </div>
    <div>
   <Slideno/>
    </div>
    </div>
    </div>
<Business/>
   </div>
    );
  }
}

