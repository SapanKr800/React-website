import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

export class Nav extends Component {


  render() {
    return (


      <div className="Navbar">

		<div className="nav-item ">
		<Link to="/"> 	<img src="images/logo.png" class="logo" alt="logo"/> </Link>
		</div>
		<div className="nav-item border">
			<div className="search">
						
			<img src="images/search-icon.png" alt=" search-icon"/>
			<input type="text" class="search-input" placeholder="Search for products"/>

			</div>
		</div>
		<div className="nav-item border">
			
			<ul>
				<li> <Link to="/works"> How it works</Link> </li>
				<li> <Link to="/pricing"> Pricing</Link> </li>
				
			</ul>
			
		</div>
		<div className="nav-item border">
			<ul>
				<li>Login</li>
				<li>signup</li>
			</ul>
			
		</div>
		
			
	</div>
    );
  }
}

