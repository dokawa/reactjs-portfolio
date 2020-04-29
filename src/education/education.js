import React, { Component } from 'react';
import Timeline from 'timeline/timeline'

class Education extends Component {
	constructor(props) {
  		super(props);

  		this.state = { entries: [
  			{ year: "2010 - 2015", text: "Electronic and Computer Engineering — Polytechnic School of University of São Paulo" },
	    	{ year: "2006 - 2008", text: "Mechatronics Junior Program  — ETEC Presidente Vargas" },
	    	{ year: "2006 - 2008", text: "High School – ETEC Presidente Vargas" },
  		],
  		title: "EDUCATION" 
  		};
  	}


	render() {
		return(
			<Timeline entries = { this.state.entries } title = { this.state.title } />
		);
	}
}

export default Education;