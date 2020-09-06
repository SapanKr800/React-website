import React, { Component } from 'react';
import './Home.css';
import {Nav} from '../../Nav/Nav'
import {Footer} from '../../Footer/Footer'
import { Subhome } from './Subhome';


 export class Home extends Component {
 

  render() {
    return (
      <div>
        <Nav/>
       <Subhome/>
       
         <Footer/>
      </div>
    );
  }
}

