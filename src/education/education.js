import React, { Component } from 'react';
import Timeline from '../timeline/timeline'

class Education extends Component {
	constructor(props) {
  		super(props);

  		this.state = { entries: [
  			{ year: "2010 - 2015", text: "Engenharia Elétrica Ênfase em Computação — Escola Politécnica da USP" },
	    	{ year: "2006 - 2008", text: "Técnico em Mecatrônica — ETEC Presidente Vargas" },
	    	{ year: "2006 - 2008", text: "Ensino Médio – ETEC Presidente Vargas" },
  		],
  		title: "FORMAÇÃO" 
  		};
  	}


	render() {
		return(
			<Timeline entries = { this.state.entries } title = { this.state.title } />
		);
	}
}

export default Education;