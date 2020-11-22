import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SVG from 'react-inlinesvg'
import PersonalInfo from 'personal-info/personal-info';
import 'hobbies-and-interests/hobbies-and-interests.css';
import Reading from 'assets/images/hobbies-and-interests/reading.svg';
import Karate from 'assets/images/hobbies-and-interests/karate.svg';
import Design from 'assets/images/hobbies-and-interests/design.svg';
// import Investing from 'assets/images/hobbies-and-interests/investing.svg';



class HobbiesAndInterests extends Component {
  render() {
    return (
	    <div class="container">
			<Link to="/hobbies-and-interests/design/" class="svg-hobbie-and-interest-icon"><SVG src={ Design } alt="Design"/></Link>
	   		<Link to="/hobbies-and-interests/reading/" class="svg-hobbie-and-interest-icon"><SVG src={ Reading } alt="Reading"/></Link>
	   		<Link to="/hobbies-and-interests/karate/" class="svg-hobbie-and-interest-icon"><SVG src={ Karate } alt="Karate"/></Link>
	   		{ /* <Link to="/hobbies-and-interests/investing/" class="svg-hobbie-and-interest-icon"><SVG src={ Investing } alt="Investing"/></Link> */ }
	    	<div>{ PersonalInfo }</div>
	    </div>
  	);
  }

}

export default HobbiesAndInterests;
