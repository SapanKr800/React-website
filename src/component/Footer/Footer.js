import React, { Component } from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

export class Footer extends Component {
  

  render() {
    return (
      

      <div className="footer">

      <div className="footer-text">
        
        <div className="footer-part1">
          <div className="footer-item">
          <p>Start a free account today</p> </div>
          <div className="footer-item">
          <input type="text" placeholder="Enter your e-mail"/>

          </div>
          
          <div className="footer-item">
          <p>Question? Call us on 12 34 56 78 for help
            Easy setup - no payment fees - up to 100 products for free</p>
            </div>
    
        </div>
        
        <div className="footer-part2">
          <div className="footer-item">
            <p>SELL ON CHAMB</p>
            <p><Link to="/pricing"> Pricing</Link> </p> </div>
            <div className="footer-item">
              <p>BUY ON CHAMB</p>
              <p><Link to="/works"> How it works suppliers</Link></p> </div>
              <div className="footer-item">
                <p>COMPANY</p>
                <p>Contact us</p> </div>
                <div className="footer-item">
                  <p>INDUSTRIES</p>
                  <p>Textiles</p>
                  <p>	Furniture</p>
                 </div>
          
    
        </div>
        
        
        
    
      </div>
    </div>
    );
  }
}

