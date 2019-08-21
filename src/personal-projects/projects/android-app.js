import React, { Component } from 'react';

class AndroidApp extends Component{
	constructor(props) {
  		super(props);
  	}
	render() {
		return (
			<div>{ this.props.year }{ this.props.title }{ this.props.description }</div>
		);
	}
}

export default AndroidApp;