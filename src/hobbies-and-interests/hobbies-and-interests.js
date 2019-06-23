import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SVG from 'react-inlinesvg'
import ContactInfo from '../contact-info/contact-info';
import PersonalInfo from '../personal-info/personal-info';
import './hobbies-and-interests.css';
import Reading from '../assets/images/hobbies-and-interests/reading.svg';
import Karate from '../assets/images/hobbies-and-interests/karate.svg';
import Design from '../assets/images/hobbies-and-interests/design.svg';
import Investing from '../assets/images/hobbies-and-interests/investing.svg';



class HobbiesAndInterests extends Component {
  render() {
    return (
	    <div class="container">
	    	<div class="svg-hobbie-and-interest-icon">
				<Link to="/hobbies-and-interests/design/"><SVG src={ Design } /></Link>
	       	</div>
	       	<div class="svg-hobbie-and-interest-icon">
	       		<Link to="/hobbies-and-interests/reading/"><SVG src={ Reading } /></Link>
	       	</div>
	       	<div class="svg-hobbie-and-interest-icon">
	       		<Link to="/hobbies-and-interests/karate/"><SVG className= { "svg-hobbie-and-interest-icon" }  src={ Karate } /></Link>
	       	</div>
			<div class="svg-hobbie-and-interest-icon">
	       		<Link to="/hobbies-and-interests/investing/"><SVG src={ Investing } /></Link>
	       	</div>
	      <div>{ PersonalInfo }</div>
	    </div>
  	);
  }

}

export default HobbiesAndInterests;
