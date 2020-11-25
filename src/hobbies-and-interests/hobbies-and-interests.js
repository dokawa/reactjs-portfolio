import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import SVG from 'react-inlinesvg'
import PersonalInfo from 'personal-info/personal-info';
import 'hobbies-and-interests/hobbies-and-interests.css';
import ReadingIcon from 'assets/images/hobbies-and-interests/reading.svg';
import KarateIcon from 'assets/images/hobbies-and-interests/karate.svg';
import DesignIcon from 'assets/images/hobbies-and-interests/design.svg';
import Design from 'hobbies-and-interests/design/design';
import Reading from 'hobbies-and-interests/reading/reading';
// import Investing from 'hobbies-and-interests/investing/investing';
import Karate from 'hobbies-and-interests/karate/karate';
// import Investing from 'assets/images/hobbies-and-interests/investing.svg';



class HobbiesAndInterests extends Component {
  render() {
    return (
    	<>
	    <div class="container">
			<Link to="/hobbies-and-interests/design" class="svg-hobbie-and-interest-icon"><SVG src={ DesignIcon } alt="Design"/></Link>
	   		<Link to="/hobbies-and-interests/reading" class="svg-hobbie-and-interest-icon"><SVG src={ ReadingIcon } alt="Reading"/></Link>
	   		<Link to="/hobbies-and-interests/karate" class="svg-hobbie-and-interest-icon"><SVG src={ KarateIcon } alt="Karate"/></Link>
	   		{ /* <Link to="/hobbies-and-interests/investing/" class="svg-hobbie-and-interest-icon"><SVG src={ Investing } alt="Investing"/></Link> */ }
	    	<div>{ PersonalInfo }</div>
	    </div>

	    <Route path="/hobbies-and-interests/" exact component={ Design } />
    	<Route path="/hobbies-and-interests/design" exact component={ Design } />
        <Route path="/hobbies-and-interests/reading" exact component={ Reading } />
        <Route path="/hobbies-and-interests/karate" exact component={ Karate } />

	    </>

  	);
  }

}

export default HobbiesAndInterests;
